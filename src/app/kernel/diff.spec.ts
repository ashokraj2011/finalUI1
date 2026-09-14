import { Rule } from './ast';
import { Evaluator } from './evaluate';
import { diffTraces } from './diff';
import { SAMPLE_SCHEMA } from './schema';

function rule(terms: Rule['terms'], id = 'r', name = 'r'): Rule {
  return { rule_id: id, name, terms };
}

describe('kernel: diffTraces', () => {
  const ev = new Evaluator({ schema: SAMPLE_SCHEMA });
  const r = rule({
    operator: 'AND',
    terms: [
      { namespace: 'customer', attribute: 'age', operator: 'greater_than_equal', value: 18 },
      { namespace: 'customer', attribute: 'status', operator: 'equal_to', value: 'ACTIVE' },
    ],
  });

  it('reports no change and no changed leaves when nothing differs', () => {
    const before = ev.evaluate(r, { customer: { age: 30, status: 'ACTIVE' } });
    const after = ev.evaluate(r, { customer: { age: 30, status: 'ACTIVE' } });
    const diff = diffTraces(before, after);
    expect(diff.outcomeChanged).toBeFalse();
    expect(diff.fromStatus).toBe('PASSED');
    expect(diff.toStatus).toBe('PASSED');
    expect(diff.changed.length).toBe(0);
    expect(diff.changedCount).toBe(0);
  });

  it('flags the outcome flip and the leaf whose status changed', () => {
    const before = ev.evaluate(r, { customer: { age: 30, status: 'ACTIVE' } });
    const after = ev.evaluate(r, { customer: { age: 30, status: 'INACTIVE' } });
    const diff = diffTraces(before, after);
    expect(diff.outcomeChanged).toBeTrue();
    expect(diff.fromStatus).toBe('PASSED');
    expect(diff.toStatus).toBe('FAILED');
    expect(diff.changedCount).toBe(1);
    expect(diff.changed[0].expression).toContain('status');
    expect(diff.changed[0].from).toBe('PASSED');
    expect(diff.changed[0].to).toBe('FAILED');
  });

  it('reports a leaf becoming UNKNOWN as a change, distinct from a real FAILED', () => {
    const before = ev.evaluate(r, { customer: { age: 30, status: 'ACTIVE' } });
    const after = ev.evaluate(r, { customer: { age: 30 } }); // status missing → UNKNOWN
    const diff = diffTraces(before, after);
    expect(diff.outcomeChanged).toBeTrue();
    expect(diff.toStatus).toBe('UNKNOWN');
    const statusDelta = diff.changed.find((c) => c.expression.includes('status'));
    expect(statusDelta?.to).toBe('UNKNOWN');
  });

  it('only reports leaf conditions, never AND/OR/NOT container nodes', () => {
    const before = ev.evaluate(r, { customer: { age: 10, status: 'ACTIVE' } });
    const after = ev.evaluate(r, { customer: { age: 30, status: 'ACTIVE' } });
    const diff = diffTraces(before, after);
    expect(diff.changed.every((c) => !c.expression.toUpperCase().includes('AND'))).toBeTrue();
  });
});
