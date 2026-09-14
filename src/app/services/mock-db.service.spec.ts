import { TestBed } from '@angular/core/testing';
import { MockDbService } from './mock-db.service';

describe('MockDbService', () => {
  let service: MockDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockDbService);
  });

  it('is created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchFromDb', () => {
    it('resolves a known namespace/key to a cloned record', async () => {
      const record = await service.fetchFromDb('customer', 'CUST-001');
      expect(record).toBeTruthy();
      expect(record!['name']).toBe('Alice Johnson');
    });

    it('returns null for an unknown namespace', async () => {
      expect(await service.fetchFromDb('not-a-namespace', 'X')).toBeNull();
    });

    it('returns null for an unknown key within a known namespace', async () => {
      expect(await service.fetchFromDb('customer', 'NOPE')).toBeNull();
    });

    it('returns a deep clone, not a reference to the internal store', async () => {
      const record = await service.fetchFromDb('customer', 'CUST-001');
      record!['name'] = 'Mutated';
      const again = await service.fetchFromDb('customer', 'CUST-001');
      expect(again!['name']).toBe('Alice Johnson');
    });
  });

  describe('getAvailableNamespaces / getAvailableKeys', () => {
    it('lists the seeded namespaces', () => {
      expect(service.getAvailableNamespaces()).toEqual(
        jasmine.arrayContaining(['customer', 'account', 'product', 'campaign', 'order']),
      );
    });

    it('lists keys for a known namespace', () => {
      expect(service.getAvailableKeys('customer')).toEqual(
        jasmine.arrayContaining(['CUST-001', 'CUST-002', 'CUST-003', 'CUST-004']),
      );
    });

    it('returns an empty array for an unknown namespace', () => {
      expect(service.getAvailableKeys('not-a-namespace')).toEqual([]);
    });
  });

  describe('fetchLiveData', () => {
    it('resolves a matched persona id to its DB record for every requested namespace', async () => {
      const result = await service.fetchLiveData(
        { personaType: 'MID', personaId: 'CUST-001', extra: [] },
        { customer: ['age', 'status'] },
      );
      expect(result.matched['customer']).toBe('CUST-001');
      expect(result.snapshot['customer']['name']).toBe('Alice Johnson');
      expect(result.snapshot['customer']['persona_id']).toBe('CUST-001');
      expect(result.snapshot['customer']['persona_type']).toBe('MID');
    });

    it('deterministically resolves an unmatched persona id to a stable record instead of failing', async () => {
      const r1 = await service.fetchLiveData({ personaType: 'MID', personaId: 'UNKNOWN-ID', extra: [] }, { customer: ['age'] });
      const r2 = await service.fetchLiveData({ personaType: 'MID', personaId: 'UNKNOWN-ID', extra: [] }, { customer: ['age'] });
      expect(r1.matched['customer']).toBe(r2.matched['customer']);
      expect(r1.matched['customer']).not.toBeNull();
    });

    it('overlays a namespaced extra param onto only that namespace', async () => {
      const result = await service.fetchLiveData(
        { personaType: 'MID', personaId: 'CUST-001', extra: [{ key: 'customer.age', value: '99' }] },
        { customer: ['age'] },
      );
      expect(result.snapshot['customer']['age']).toBe(99);
    });

    it('overlays a bare extra param across every resolved namespace, coercing type', async () => {
      const result = await service.fetchLiveData(
        { personaType: 'MID', personaId: 'CUST-001', extra: [{ key: 'flag', value: 'true' }] },
        { customer: ['age'], account: ['balance'] },
      );
      expect(result.snapshot['customer']['flag']).toBe(true);
      expect(result.snapshot['account']['flag']).toBe(true);
    });

    it('ignores extra params with a blank key', async () => {
      const result = await service.fetchLiveData(
        { personaType: 'MID', personaId: 'CUST-001', extra: [{ key: '  ', value: 'x' }] },
        { customer: ['age'] },
      );
      expect(result.snapshot['customer']['  ']).toBeUndefined();
    });
  });
});
