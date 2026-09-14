import { LocalStoragePort, MemoryPort, STORE_KEYS, STORE_SCHEMA_VERSION, migrate } from './persistence';

describe('MemoryPort', () => {
  it('returns the fallback when the key is absent', () => {
    const port = new MemoryPort();
    expect(port.read('missing', 'fallback')).toBe('fallback');
  });

  it('round-trips a written value', () => {
    const port = new MemoryPort();
    port.write('key', { a: 1, b: [1, 2, 3] });
    expect(port.read<any>('key', null)).toEqual({ a: 1, b: [1, 2, 3] });
  });

  it('removes a value', () => {
    const port = new MemoryPort();
    port.write('key', 'value');
    port.remove('key');
    expect(port.read('key', 'fallback')).toBe('fallback');
  });
});

describe('LocalStoragePort', () => {
  const key = '__persistence_spec_test_key__';
  afterEach(() => localStorage.removeItem(key));

  it('returns the fallback when nothing is stored', () => {
    const port = new LocalStoragePort();
    expect(port.read(key, 'fallback')).toBe('fallback');
  });

  it('writes then reads back the same value', () => {
    const port = new LocalStoragePort();
    port.write(key, { hello: 'world' });
    expect(port.read<any>(key, null)).toEqual({ hello: 'world' });
  });

  it('removes a stored value', () => {
    const port = new LocalStoragePort();
    port.write(key, 'value');
    port.remove(key);
    expect(port.read(key, 'fallback')).toBe('fallback');
  });

  it('falls back gracefully on corrupted JSON instead of throwing', () => {
    localStorage.setItem(key, '{not valid json');
    const port = new LocalStoragePort();
    expect(port.read(key, 'fallback')).toBe('fallback');
  });
});

describe('migrate', () => {
  it('seeds empty fixtures/suites buckets and records the schema version on a fresh store', () => {
    const port = new MemoryPort();
    migrate(port);
    expect(port.read<any>(STORE_KEYS.fixtures, null)).toEqual([]);
    expect(port.read<any>(STORE_KEYS.suites, null)).toEqual([]);
    expect(port.read(STORE_KEYS.schemaVersion, 0)).toBe(STORE_SCHEMA_VERSION);
  });

  it('does not clobber existing fixtures/suites data on migration', () => {
    const port = new MemoryPort();
    port.write(STORE_KEYS.fixtures, [{ id: 'fx1' }]);
    port.write(STORE_KEYS.suites, [{ id: 'st1' }]);
    migrate(port);
    expect(port.read(STORE_KEYS.fixtures, [])).toEqual([{ id: 'fx1' } as any]);
    expect(port.read(STORE_KEYS.suites, [])).toEqual([{ id: 'st1' } as any]);
  });

  it('is a no-op when already at the current schema version', () => {
    const port = new MemoryPort();
    port.write(STORE_KEYS.schemaVersion, STORE_SCHEMA_VERSION);
    port.write(STORE_KEYS.fixtures, 'sentinel' as any);
    migrate(port);
    expect(port.read<any>(STORE_KEYS.fixtures, null)).toBe('sentinel' as any);
  });
});
