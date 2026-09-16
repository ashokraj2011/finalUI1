import { TestBed } from '@angular/core/testing';
import { RuleEngineService } from './rule-engine.service';
import { Rule } from '../models/types';
import { SchemaField } from '../types';

function rule(terms: Rule['terms'], id = 'r', name = 'r'): Rule {
  return { rule_id: id, name, terms };
}

describe('RuleEngineService', () => {
  let service: RuleEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuleEngineService);
  });

  it('is created', () => {
    expect(service).toBeTruthy();
  });

  describe('isSessionNamespace', () => {
    it('recognizes a session namespace registered in the schema', () => {
      expect(service.isSessionNamespace('session')).toBeTrue();
    });
    it('recognizes a non-session namespace registered in the schema', () => {
      expect(service.isSessionNamespace('customer')).toBeFalse();
    });
    it('falls back to legacy session namespace names when unregistered', () => {
      expect(service.isSessionNamespace('CONTEXT')).toBeTrue();
      expect(service.isSessionNamespace('unknown-ns')).toBeFalse();
    });
  });

  describe('extractNamespaces / extractNamespaceAttributes', () => {
    it('collects namespaces and attributes referenced by a simple rule', () => {
      const r = rule({
        operator: 'AND',
        terms: [
          { namespace: 'customer', attribute: 'age', operator: 'greater_than_equal', value: 18 },
          { namespace: 'customer', attribute: 'status', operator: 'equal_to', value: 'ACTIVE' },
        ],
      });
      expect(service.extractNamespaces(r)).toEqual(['customer']);
      expect(service.extractNamespaceAttributes(r)).toEqual({ customer: ['age', 'status'] });
    });

    it('follows rule_refs and is cycle-safe', () => {
      const a = rule({ operator: 'AND', terms: [{ rule_ref: 'B' }] }, 'A', 'A');
      const b = rule(
        { operator: 'AND', terms: [{ namespace: 'account', attribute: 'balance', operator: 'greater_than', value: 0 }, { rule_ref: 'A' }] },
        'B',
        'B',
      );
      expect(() => service.extractNamespaces(a, [a, b])).not.toThrow();
      expect(service.extractNamespaces(a, [a, b])).toEqual(['account']);
    });
  });

  describe('evaluateRule / lint / synthesizeSnapshot', () => {
    const r = rule({ operator: 'AND', terms: [{ namespace: 'customer', attribute: 'age', operator: 'greater_than_equal', value: 18 }] });

    it('evaluates a rule against a data snapshot', () => {
      expect(service.evaluateRule(r, { customer: { age: 30 } }).status).toBe('PASSED');
      expect(service.evaluateRule(r, { customer: { age: 10 } }).status).toBe('FAILED');
    });

    it('lints a rule and flags an unknown attribute', () => {
      const bad = rule({ operator: 'AND', terms: [{ namespace: 'customer', attribute: 'nope', operator: 'equal_to', value: 'x' }] });
      expect(service.lint(bad).some((f) => f.code === 'unknown-attribute')).toBeTrue();
    });

    it('synthesizes a snapshot that drives the rule to the requested target', () => {
      const passSnap = service.synthesizeSnapshot(r, true);
      expect(service.evaluateRule(r, passSnap).status).toBe('PASSED');
      const failSnap = service.synthesizeSnapshot(r, false);
      expect(service.evaluateRule(r, failSnap).status).toBe('FAILED');
    });

    it('flattens conditions from an eval result', () => {
      const result = service.evaluateRule(r, { customer: { age: 30 } });
      expect(service.flattenConditions(result).length).toBeGreaterThan(0);
    });
  });

  describe('term type guards', () => {
    it('distinguishes logical, comparison, and rule-ref terms', () => {
      const logical = { operator: 'AND', terms: [] } as any;
      const comparison = { namespace: 'customer', attribute: 'age', operator: 'equal_to', value: 1 } as any;
      const ruleRef = { rule_ref: 'X' } as any;
      expect(service.isLogicalTerm(logical)).toBeTrue();
      expect(service.isComparisonTerm(comparison)).toBeTrue();
      expect(service.isRuleRefTerm(ruleRef)).toBeTrue();
      expect(service.isLogicalTerm(comparison)).toBeFalse();
    });
  });

  describe('filterRows', () => {
    it('applies criteria, ordering, and first/last/range selection before downstream evaluation', () => {
      const rows = [
        { id: 1, score: 30, country: 'US' },
        { id: 2, score: 80, country: 'CA' },
        { id: 3, score: 60, country: 'US' },
        { id: 4, score: 10, country: 'AU' },
      ];

      const filtered = service.filterRows(rows, {
        criteria: [{ field: 'country', op: '==', value: 'US' }],
        orderBy: 'score',
        selectionMode: 'last',
        selectionCount: 1,
      });
      expect(filtered).toEqual([{ id: 3, score: 60, country: 'US' }]);

      const ranged = service.filterRows(rows, {
        criteria: [],
        orderBy: 'score',
        selectionMode: 'range',
        rangeStart: 1,
        rangeEnd: 2,
      });
      expect(ranged).toEqual([
        { id: 4, score: 10, country: 'AU' },
        { id: 1, score: 30, country: 'US' },
      ]);
    });

    it('rejects invalid or incomplete filter configs', () => {
      expect(service.validateFilter({
        criteria: [],
        orderBy: '',
        selectionMode: 'first',
        selectionCount: 0,
      })).toContain('orderBy');
      expect(service.validateFilter({
        criteria: [],
        orderBy: 'score',
        selectionMode: 'range',
        rangeStart: 3,
        rangeEnd: 1,
      })).toContain('range');
    });
  });

  describe('syncGlossary', () => {
    // service.schema is the shared SAMPLE_SCHEMA singleton also used by kernel.spec.ts,
    // so any mutation here must be undone or it leaks into other spec files.
    let originalDefs: ReturnType<RuleEngineService['schema']['all']>;

    beforeEach(() => {
      originalDefs = service.schema.all();
    });

    afterEach(() => {
      service.schema.clear();
      for (const def of originalDefs) service.schema.registerNamespace(def);
    });

    it('rebuilds the schema registry from glossary fields, grouped by namespace', () => {
      const fields: SchemaField[] = [
        { name: 'score', type: 'int', entity: 'risk', description: '', datasource: 'db' },
        { name: 'flag', type: 'bool', entity: 'session', description: '', datasource: 'session' },
      ];
      service.syncGlossary(fields);
      expect(service.schema.hasNamespace('risk')).toBeTrue();
      expect(service.schema.isSession('risk')).toBeFalse();
      expect(service.schema.hasNamespace('session')).toBeTrue();
      expect(service.schema.isSession('session')).toBeTrue();
    });

    it('is a no-op on an empty or undefined field list', () => {
      const before = service.schema.hasNamespace('customer');
      service.syncGlossary([]);
      expect(service.schema.hasNamespace('customer')).toBe(before);
    });
  });
});
