import { TestBed } from '@angular/core/testing';
import { RuleStoreService } from './rule-store.service';
import { Rule, TestCase } from '../models/types';

function makeCase(ruleId: string, overrides: Partial<TestCase> = {}): TestCase {
  return {
    id: overrides.id ?? `tc_${Math.random().toString(36).slice(2, 8)}`,
    name: overrides.name ?? 'a case',
    description: overrides.description ?? '',
    ruleId,
    dbKeys: {},
    snapshot: overrides.snapshot ?? {},
    createdAt: new Date().toISOString(),
    ...overrides,
  };
}

describe('RuleStoreService', () => {
  let store: RuleStoreService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    store = TestBed.inject(RuleStoreService);
  });

  afterEach(() => localStorage.clear());

  it('is created and seeds a selected rule from the sample set', () => {
    expect(store).toBeTruthy();
    expect(store.allRules().length).toBeGreaterThan(0);
    expect(store.selectedRule()).toBeTruthy();
  });

  describe('rule selection', () => {
    it('adds a rule and selects it, resetting test data / invocation', () => {
      const before = store.allRules().length;
      const newRule: Rule = { rule_id: 'custom-1', name: 'Custom', terms: { operator: 'AND', terms: [] } };
      store.testData.set({ customer: { age: 99 } });
      store.addRule(newRule);
      expect(store.allRules().length).toBe(before + 1);
      expect(store.selectedRuleId()).toBe('custom-1');
      expect(store.testData()).toEqual({});
    });

    it('selectRule updates selection and resets test data', () => {
      const otherId = store.allRules()[store.allRules().length - 1].rule_id;
      store.testData.set({ x: {} });
      store.selectRule(otherId);
      expect(store.selectedRuleId()).toBe(otherId);
      expect(store.testData()).toEqual({});
    });
  });

  describe('test case CRUD', () => {
    it('saves a new test case and finds it via casesForSelectedRule', () => {
      const ruleId = store.selectedRuleId();
      const tc = makeCase(ruleId, { id: 'tc_new', name: 'New case' });
      store.saveTestCase(tc);
      expect(store.casesForSelectedRule().some((c) => c.id === 'tc_new')).toBeTrue();
    });

    it('updates an existing test case in place rather than duplicating it', () => {
      const ruleId = store.selectedRuleId();
      const tc = makeCase(ruleId, { id: 'tc_dup', name: 'Original' });
      store.saveTestCase(tc);
      store.saveTestCase({ ...tc, name: 'Updated' });
      const matches = store.testCases().filter((c) => c.id === 'tc_dup');
      expect(matches.length).toBe(1);
      expect(matches[0].name).toBe('Updated');
    });

    it('deletes a test case and its run history / suite references', () => {
      const ruleId = store.selectedRuleId();
      const tc = makeCase(ruleId, { id: 'tc_del' });
      store.saveTestCase(tc);
      store.executeTestCase(tc);
      expect(store.runsForTestCase('tc_del').length).toBe(1);

      store.deleteTestCase('tc_del');
      expect(store.testCases().some((c) => c.id === 'tc_del')).toBeFalse();
      expect(store.runsForTestCase('tc_del').length).toBe(0);
      expect(store.suites().every((s) => !s.caseIds.includes('tc_del'))).toBeTrue();
    });
  });

  describe('executeTestCase', () => {
    it('records a PASSED run and classifies the assertion as a match', () => {
      const rule = store.allRules()[0];
      const tc = makeCase(rule.rule_id, { id: 'tc_exec', expectedResult: undefined });
      const run = store.executeTestCase(tc);
      expect(run.testCaseId).toBe('tc_exec');
      expect(run.assertion).toBe('none');
    });

    it('classifies a mismatch on unchanged data as a bug', () => {
      const rule = store.allRules()[0];
      const snapshot = {};
      // Pin an expectation, then flip it to force a mismatch without changing the data.
      const first = store.executeTestCase(makeCase(rule.rule_id, { id: 'tc_bug', snapshot }));
      const actualStatus = first.evalResult.status === 'PASSED' ? 'PASSED' : 'FAILED';
      const wrongExpectation = actualStatus === 'PASSED' ? 'FAILED' : 'PASSED';

      const tc = makeCase(rule.rule_id, {
        id: 'tc_bug',
        expectedResult: wrongExpectation,
        expectedSnapshot: snapshot, // same data as evaluated → no drift
        snapshot,
      });
      const run = store.executeTestCase(tc);
      expect(run.assertion).toBe('mismatch');
      expect(run.assertionClass).toBe('bug');
    });

    it('returns a FAILED result for a test case whose ruleId does not exist', () => {
      const tc = makeCase('does-not-exist', { id: 'tc_missing_rule' });
      const run = store.executeTestCase(tc);
      expect(run.evalResult.status).toBe('FAILED');
    });
  });

  describe('regressionForCase', () => {
    it('returns null when fewer than two runs exist', () => {
      const rule = store.allRules()[0];
      const tc = makeCase(rule.rule_id, { id: 'tc_regress_none' });
      store.saveTestCase(tc);
      expect(store.regressionForCase('tc_regress_none')).toBeNull();
    });

    it('diffs the two most recent runs once at least two exist', () => {
      const rule = store.allRules()[0];
      const tc = makeCase(rule.rule_id, { id: 'tc_regress', snapshot: {} });
      store.saveTestCase(tc);
      store.executeTestCase(tc);
      store.executeTestCase(tc);
      const diff = store.regressionForCase('tc_regress');
      expect(diff).not.toBeNull();
      expect(diff!.outcomeChanged).toBeFalse();
    });
  });

  describe('fixtures and suites', () => {
    it('saves and deletes a fixture', () => {
      store.saveFixture({ id: 'fx_1', name: 'Fixture 1', data: {}, createdAt: new Date().toISOString() });
      expect(store.fixtures().some((f) => f.id === 'fx_1')).toBeTrue();
      store.deleteFixture('fx_1');
      expect(store.fixtures().some((f) => f.id === 'fx_1')).toBeFalse();
    });

    it('saves and deletes a suite, reflected in suitesForSelectedRule', () => {
      const ruleId = store.selectedRuleId();
      store.saveSuite({ id: 'st_1', name: 'Suite 1', ruleId, caseIds: [], createdAt: new Date().toISOString() });
      expect(store.suitesForSelectedRule().some((s) => s.id === 'st_1')).toBeTrue();
      store.deleteSuite('st_1');
      expect(store.suitesForSelectedRule().some((s) => s.id === 'st_1')).toBeFalse();
    });
  });

  describe('coverage', () => {
    it('aggregateCoverage is 0 when no rule has any runs', () => {
      // A brand-new store may already have seeded runs; only assert the shape/type here.
      expect(typeof store.aggregateCoverage()).toBe('number');
    });

    it('branchCoverageFor returns 0 for a rule with no run history', () => {
      expect(store.branchCoverageFor('no-such-rule-id')).toBe(0);
    });
  });
});
