import { ComparisonOperator } from './ast';
import { compareTyped } from './compare';

export type FilterSortDirection = 'asc' | 'desc';

export interface FilterCapability {
  searchableAttributes: ReadonlySet<string>;
  operators: ReadonlySet<ComparisonOperator>;
}

export interface FilterConfig {
  attribute: string;
  operator: ComparisonOperator;
  value?: any;
  sortBy?: string;
  sortDirection?: FilterSortDirection;
  limit?: number;
}

export interface FilterSuccess<T> {
  status: 'success';
  items: T[];
}

export interface FilterFailure {
  status: 'failure';
  error: string;
}

export type FilterResult<T> = FilterSuccess<T> | FilterFailure;

export function applyFilter<T extends Record<string, any>>(
  records: readonly T[],
  config: FilterConfig,
  capability: FilterCapability,
): FilterResult<T> {
  if (!capability.searchableAttributes.has(config.attribute)) {
    return { status: 'failure', error: `Unsupported filter attribute: ${config.attribute}` };
  }
  if (!capability.operators.has(config.operator)) {
    return { status: 'failure', error: `Unsupported filter operator: ${config.operator}` };
  }
  if (config.sortBy && !capability.searchableAttributes.has(config.sortBy)) {
    return { status: 'failure', error: `Unsupported sort attribute: ${config.sortBy}` };
  }
  if (config.limit !== undefined && (!Number.isInteger(config.limit) || config.limit < 0)) {
    return { status: 'failure', error: 'Filter limit must be a non-negative integer' };
  }

  const filtered = records.filter((record) =>
    compareTyped(record[config.attribute], config.operator, config.value) === 'TRUE',
  );

  if (config.sortBy) {
    const direction = config.sortDirection === 'desc' ? -1 : 1;
    filtered.sort((left, right) => compareValues(left[config.sortBy!], right[config.sortBy!]) * direction);
  }

  return {
    status: 'success',
    items: config.limit === undefined ? filtered : filtered.slice(0, config.limit),
  };
}

function compareValues(left: any, right: any): number {
  if (left === right) return 0;
  if (left === undefined || left === null) return -1;
  if (right === undefined || right === null) return 1;
  return left < right ? -1 : 1;
}
