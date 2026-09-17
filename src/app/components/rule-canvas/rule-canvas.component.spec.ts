import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RuleCanvasComponent } from './rule-canvas.component';

describe('RuleCanvasComponent — General Logic Filter block (y-story)', () => {
  let fixture: ComponentFixture<RuleCanvasComponent>;
  let component: RuleCanvasComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuleCanvasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RuleCanvasComponent);
    component = fixture.componentInstance;
    component.addNode('Decision');
    fixture.detectChanges();
  });

  function decisionNode() {
    return component.nodes.find(n => n.type === 'Decision')!;
  }

  function reload(id: string) {
    return component.nodes.find(n => n.id === id)!;
  }

  // @ac:Y-STORY:AC-001
  it('renders a Filter block positioned above Term 1 in General Logic', () => {
    const panel: HTMLElement = fixture.nativeElement;
    const headers = Array.from(panel.querySelectorAll('aside .uppercase'))
      .map(el => el.textContent?.trim() ?? '');
    const filterIdx = headers.indexOf('Filter');
    const termIdx = headers.findIndex(h => h.startsWith('Term 1'));

    expect(filterIdx).toBeGreaterThan(-1);
    expect(termIdx).toBeGreaterThan(-1);
    expect(filterIdx).toBeLessThan(termIdx);
  });

  // @ac:Y-STORY:AC-002
  it('lets the user add and reorder ordering attributes from the same field list used by Term conditions', () => {
    const node = decisionNode();
    expect(node.decisionLogic!.filter.orderBy.length).toBe(0);

    component.addFilterAttribute(node);
    let updated = reload(node.id);
    expect(updated.decisionLogic!.filter.orderBy.length).toBe(1);
    expect(component.fieldOptions).toContain(updated.decisionLogic!.filter.orderBy[0].field);
    expect(updated.decisionLogic!.filter.orderBy[0].direction).toBe('asc');

    component.setFilterAttributeDirection(updated, updated.decisionLogic!.filter.orderBy[0], 'desc');
    updated = reload(node.id);
    expect(updated.decisionLogic!.filter.orderBy[0].direction).toBe('desc');

    const newField = component.fieldOptions[1];
    component.setFilterAttributeField(updated, updated.decisionLogic!.filter.orderBy[0], newField);
    updated = reload(node.id);
    expect(updated.decisionLogic!.filter.orderBy[0].field).toBe(newField);

    component.removeFilterAttribute(updated, updated.decisionLogic!.filter.orderBy[0].id);
    updated = reload(node.id);
    expect(updated.decisionLogic!.filter.orderBy.length).toBe(0);
  });

  // @ac:Y-STORY:AC-003
  it('lets the user choose a first/last/range selection mode and stores it on the decision-logic model', () => {
    const node = decisionNode();
    expect(node.decisionLogic!.filter.selectionMode).toBe('first');

    component.setFilterSelectionMode(node, 'last');
    let updated = reload(node.id);
    component.updateFilterRowCount(updated, 25);
    updated = reload(node.id);
    expect(updated.decisionLogic!.filter.selectionMode).toBe('last');
    expect(updated.decisionLogic!.filter.rowCount).toBe(25);

    component.setFilterSelectionMode(updated, 'range');
    updated = reload(node.id);
    component.updateFilterRangeStart(updated, 5);
    updated = reload(node.id);
    component.updateFilterRangeEnd(updated, 15);
    updated = reload(node.id);
    expect(updated.decisionLogic!.filter.selectionMode).toBe('range');
    expect(updated.decisionLogic!.filter.rangeStart).toBe(5);
    expect(updated.decisionLogic!.filter.rangeEnd).toBe(15);
  });

  // @ac:Y-STORY:AC-004
  it('persists the configured Filter block in the flow JSON export, the same way Term data is stored', () => {
    const node = decisionNode();
    component.addFilterAttribute(node);
    let updated = reload(node.id);
    component.setFilterSelectionMode(updated, 'range');
    updated = reload(node.id);
    component.updateFilterRangeStart(updated, 2);
    updated = reload(node.id);
    component.updateFilterRangeEnd(updated, 9);
    fixture.detectChanges();

    const json = JSON.parse(component.getFlowJson());
    const exportedNode = json.nodes.find((n: any) => n.id === node.id);

    expect(exportedNode.decisionLogic.filter.selectionMode).toBe('range');
    expect(exportedNode.decisionLogic.filter.rangeStart).toBe(2);
    expect(exportedNode.decisionLogic.filter.rangeEnd).toBe(9);
    expect(exportedNode.decisionLogic.filter.orderBy.length).toBe(1);

    // Reselecting the node must re-render the same persisted filter state as Term data does.
    const reselected = reload(node.id);
    expect(reselected.decisionLogic!.filter.selectionMode).toBe('range');
    expect(reselected.decisionLogic!.filter.orderBy.length).toBe(1);
  });
});
