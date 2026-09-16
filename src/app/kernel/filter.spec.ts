import { applyFilter, FilterCapability } from './filter';
import { ComparisonOperator } from './ast';

const capability: FilterCapability = {
  searchableAttributes: new Set(['amount', 'status', 'createdAt']),
  operators: new Set<ComparisonOperator>([
    'equal_to',
    'greater_than',
    'less_than',
  ]),
};

const records = [
  { amount: 30, status: 'active', createdAt: 3 },
  { amount: 10, status: 'active', createdAt: 1 },
  { amount: 20, status: 'blocked', createdAt: 2 },
];

describe('applyFilter', () => {
  // @ac:ASHOK-FILTER:AC-001
  it('returns filtered records through the pre-evaluation filter contract', () => {
    const result = applyFilter(records, { attribute: 'status', operator: 'equal_to', value: 'active' }, capability);
    expect(result.status).toBe('success');
    if (result.status === 'success') expect(result.items.length).toBe(2);
  });

  // @ac:ASHOK-FILTER:AC-002
  it('accepts only searchable attributes from the capability', () => {
    const result = applyFilter(records, { attribute: 'unknown', operator: 'equal_to', value: 'active' }, capability);
    expect(result).toEqual({ status: 'failure', error: 'Unsupported filter attribute: unknown' });
  });

  // @ac:ASHOK-FILTER:AC-003
  it('applies capability-supported comparison and range operators', () => {
    const result = applyFilter(records, { attribute: 'amount', operator: 'greater_than', value: 15 }, capability);
    expect(result.status).toBe('success');
    if (result.status === 'success') expect(result.items.map((record) => record.amount)).toEqual([30, 20]);
  });

  // @ac:ASHOK-FILTER:AC-004
  it('preserves structured filter configuration failures as failure states', () => {
    const result = applyFilter(records, { attribute: 'amount', operator: 'equal_to', value: 10, limit: -1 }, capability);
    expect(result).toEqual({ status: 'failure', error: 'Filter limit must be a non-negative integer' });
  });

  // @ac:ASHOK-FILTER:AC-005
  it('sorts in either direction and applies SQL-like limit semantics', () => {
    const ascending = applyFilter(records, {
      attribute: 'status', operator: 'equal_to', value: 'active',
      sortBy: 'amount', sortDirection: 'asc', limit: 1,
    }, capability);
    const descending = applyFilter(records, {
      attribute: 'status', operator: 'equal_to', value: 'active',
      sortBy: 'amount', sortDirection: 'desc',
    }, capability);
    expect(ascending.status).toBe('success');
    expect(descending.status).toBe('success');
    if (ascending.status === 'success' && descending.status === 'success') {
      expect(ascending.items.map((record) => record.amount)).toEqual([10]);
      expect(descending.items.map((record) => record.amount)).toEqual([30, 10]);
    }
  });
});
