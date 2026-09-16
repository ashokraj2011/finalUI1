import { Injectable } from '@angular/core';
import { SchemaField } from '../types';
import {
  ComparisonTerm,
  EvalResult,
  LogicalTerm,
  Rule,
  RuleRefTerm,
  Term,
  TestDataSnapshot,
} from '../models/types';
import {
  Evaluator,
  Finding,
  Linter,
  SAMPLE_SCHEMA,
  SchemaRegistry,
  Synthesizer,
  comparisonLabel,
  flattenConditions,
  isComparisonTerm,
  isLogicalTerm,
  isRuleRefTerm,
  operatorDisplay,
  AttrType,
  NamespaceSource,
  FilterConfig,
  FilterCriterion,
  FilterSelectionMode,
} from '../kernel';

/**
 * Thin Angular facade over the framework-agnostic kernel. Keeps the public API
 * the components already depend on, but the actual logic — evaluation, synthesis,
 * linting — now lives in the sound, unit-tested kernel.
 */
@Injectable({ providedIn: 'root' })
export class RuleEngineService {
  /** Legacy session-namespace names, used as a fallback when a namespace is not in the schema. */
  static readonly SESSION_NAMESPACES = ['session', 'context', 'request'];

  /** The schema the kernel uses for typed coercion and linting. */
  readonly schema: SchemaRegistry = SAMPLE_SCHEMA;

  syncGlossary(fields: SchemaField[]) {
    if (!fields || fields.length === 0) return;

    // Clear registry and rebuild to sync cleanly
    this.schema.clear();

    const groups = new Map<string, { source: NamespaceSource; attributes: Record<string, AttrType> }>();

    fields.forEach(f => {
      let kind: AttrType['kind'] = 'string';
      if (f.type === 'int') kind = 'int';
      else if (f.type === 'num') kind = 'number';
      else if (f.type === 'bool') kind = 'bool';

      const nsName = f.entity;
      const source: NamespaceSource = f.datasource === 'session' ? 'session' : 'db';

      if (!groups.has(nsName)) {
        groups.set(nsName, { source, attributes: {} });
      }
      groups.get(nsName)!.attributes[f.name] = { kind };
    });

    groups.forEach((val, key) => {
      this.schema.registerNamespace({
        namespace: key,
        source: val.source,
        attributes: val.attributes
      });
    });
    console.log('Synchronized Rule Validation schema registry with active glossary.');
  }

  isSessionNamespace(namespace: string): boolean {
    if (this.schema.hasNamespace(namespace)) return this.schema.isSession(namespace);
    return RuleEngineService.SESSION_NAMESPACES.includes(namespace.toLowerCase());
  }

  isLogicalTerm(term: Term): term is LogicalTerm {
    return isLogicalTerm(term);
  }
  isComparisonTerm(term: Term): term is ComparisonTerm {
    return isComparisonTerm(term);
  }
  isRuleRefTerm(term: Term): term is RuleRefTerm {
    return isRuleRefTerm(term);
  }

  operatorDisplay(op: string): string {
    return operatorDisplay(op);
  }

  /** All namespaces referenced by a rule (following rule_refs). */
  extractNamespaces(rule: Rule, allRules: Rule[] = []): string[] {
    return Object.keys(this.extractNamespaceAttributes(rule, allRules));
  }

  /** Namespace → attributes referenced by a rule (following rule_refs, cycle-safe). */
  extractNamespaceAttributes(rule: Rule, allRules: Rule[] = []): Record<string, string[]> {
    const index = new Map(allRules.map((r) => [r.rule_id, r]));
    const attrs: Record<string, Set<string>> = {};

    const walk = (term: Term, stack: Set<string>) => {
      if (isComparisonTerm(term)) {
        (attrs[term.namespace] ??= new Set<string>()).add(term.attribute);
      } else if (isLogicalTerm(term)) {
        term.terms.forEach((t) => walk(t, stack));
      } else if (isRuleRefTerm(term)) {
        const ref = index.get(term.rule_ref);
        if (ref && !stack.has(term.rule_ref)) walk(ref.terms, new Set(stack).add(term.rule_ref));
      }
    };

    walk(rule.terms, new Set([rule.rule_id]));
    return Object.fromEntries(Object.entries(attrs).map(([ns, set]) => [ns, Array.from(set)]));
  }

  /** Evaluate a rule against a data snapshot, producing a decision-trace tree. */
  evaluateRule(rule: Rule, data: TestDataSnapshot, allRules: Rule[] = []): EvalResult {
    return new Evaluator({ rules: allRules, schema: this.schema }).evaluate(rule, data);
  }

  /** Flatten all leaf conditions from an EvalResult tree (for coverage analysis). */
  flattenConditions(result: EvalResult): EvalResult[] {
    return flattenConditions(result);
  }

  /** Static analysis: type errors, undefined attributes, cyclic refs, contradictions. */
  lint(rule: Rule, allRules: Rule[] = []): Finding[] {
    return new Linter(allRules.length ? allRules : [rule], this.schema).lint(rule);
  }

  /**
   * Synthesize a data snapshot that drives the rule to `target` (true = PASS,
   * false = FAIL), via the constraint solver. Conflicts (unsatisfiable branches)
   * are surfaced through `lint`; here we return the best-effort snapshot.
   */
  synthesizeSnapshot(rule: Rule, target: boolean, allRules: Rule[] = []): TestDataSnapshot {
    return new Synthesizer(allRules, this.schema).synthesize(rule, target).snapshot;
  }

  /**
   * Synthesize a snapshot that drives one leaf condition (by its label) to a
   * specific truth and keeps it reachable — used to close a coverage gap on a
   * branch that whole-rule synthesis would short-circuit past.
   */
  synthesizeBranch(rule: Rule, targetLabel: string, want: boolean, allRules: Rule[] = []): TestDataSnapshot {
    return new Synthesizer(allRules, this.schema).synthesizeBranch(rule, targetLabel, want).snapshot;
  }

  /** Human-readable label for a comparison term. */
  comparisonLabel(term: ComparisonTerm): string {
    return comparisonLabel(term);
  }

  /** Validate a visual-designer filter configuration before it is used. */
  validateFilter(config: Partial<FilterConfig> | null | undefined): string[] {
    const errs: string[] = [];
    if (!config) return ['filter'];

    const requiresValue = (op: string) => !['exists', 'not_exists'].includes(op);
    if (config.criteria && config.criteria.some((c) => !c || !c.field || !c.op || (requiresValue(c.op) && c.value === ''))) {
      errs.push('criteria');
    }

    const selectionMode = (config.selectionMode ?? 'all') as FilterSelectionMode;
    const orderBy = (config.orderBy ?? '').trim();

    if ((selectionMode === 'first' || selectionMode === 'last' || selectionMode === 'range') && !orderBy) {
      errs.push('orderBy');
    }

    const selectionCount = Number(config.selectionCount ?? 0);
    if ((selectionMode === 'first' || selectionMode === 'last') && (!Number.isFinite(selectionCount) || selectionCount < 1)) {
      errs.push('selectionCount');
    }

    if (selectionMode === 'range') {
      const start = Number(config.rangeStart ?? 0);
      const end = Number(config.rangeEnd ?? 0);
      if (!Number.isFinite(start) || !Number.isFinite(end) || start < 1 || end < start) {
        errs.push('range');
      }
    }

    return errs;
  }

  /** Apply a Visual Designer filter config to a row collection. */
  filterRows<T extends Record<string, any>>(rows: T[], config: Partial<FilterConfig> | null | undefined): T[] {
    if (!Array.isArray(rows) || rows.length === 0 || !config) return rows;

    const criteria = (config.criteria ?? []).filter((c) => !!c && !!c.field && !!c.op);
    const selectionMode = (config.selectionMode ?? 'all') as FilterSelectionMode;
    const orderBy = (config.orderBy ?? '').trim();

    let filtered = rows.filter((row) => criteria.every((criterion) => this.matchesCriterion(row, criterion)));
    if (orderBy) {
      const direction = (config.orderDirection ?? 'asc') === 'desc' ? -1 : 1;
      filtered = [...filtered].sort((a, b) => {
        const aVal = a[orderBy];
        const bVal = b[orderBy];
        const aNum = typeof aVal === 'number' ? aVal : Number(aVal);
        const bNum = typeof bVal === 'number' ? bVal : Number(bVal);
        if (Number.isFinite(aNum) && Number.isFinite(bNum)) return (aNum - bNum) * direction;
        return String(aVal ?? '').localeCompare(String(bVal ?? '')) * direction;
      });
    }

    if (selectionMode === 'all') return filtered;
    if (selectionMode === 'first') {
      const count = Math.max(1, Number(config.selectionCount ?? 1));
      return filtered.slice(0, count);
    }
    if (selectionMode === 'last') {
      const count = Math.max(1, Number(config.selectionCount ?? 1));
      return filtered.slice(-count);
    }

    const start = Math.max(1, Number(config.rangeStart ?? 1));
    const end = Math.max(start, Number(config.rangeEnd ?? start));
    return filtered.slice(start - 1, end);
  }

  private matchesCriterion<T extends Record<string, any>>(row: T, criterion: FilterCriterion): boolean {
    const raw = row[criterion.field];
    const value = criterion.value ?? '';
    const actual = raw === null || raw === undefined ? undefined : raw;
    const expected = value;

    switch (criterion.op) {
      case 'exists':
        return actual !== undefined && actual !== null;
      case 'not_exists':
        return actual === undefined || actual === null;
      case '==':
        return String(actual ?? '') === String(expected);
      case '!=':
        return String(actual ?? '') !== String(expected);
      case '>':
        return Number(actual ?? NaN) > Number(expected);
      case '<':
        return Number(actual ?? NaN) < Number(expected);
      case '>=':
        return Number(actual ?? NaN) >= Number(expected);
      case '<=':
        return Number(actual ?? NaN) <= Number(expected);
      case 'contains':
        return String(actual ?? '').toLowerCase().includes(String(expected).toLowerCase());
      case 'not_contains':
        return !String(actual ?? '').toLowerCase().includes(String(expected).toLowerCase());
      case 'starts_with':
        return String(actual ?? '').toLowerCase().startsWith(String(expected).toLowerCase());
      case 'in':
        return String(expected).split(',').map((part) => part.trim()).includes(String(actual ?? ''));
      case 'not_in':
        return !String(expected).split(',').map((part) => part.trim()).includes(String(actual ?? ''));
      default:
        return true;
    }
  }
}
