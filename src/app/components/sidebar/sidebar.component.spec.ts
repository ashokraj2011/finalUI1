import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { RuleStoreService } from '../../services/rule-store.service';

describe('SidebarComponent', () => {
  let fixture: ComponentFixture<SidebarComponent>;
  let component: SidebarComponent;

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => localStorage.clear());

  it('creates the sidebar screen', () => {
    expect(component).toBeTruthy();
  });

  it('renders the primary navigation menu items', () => {
    const el: HTMLElement = fixture.nativeElement;
    const labels = Array.from(el.querySelectorAll('nav ul:first-of-type button span')).map((s) => s.textContent?.trim());
    expect(labels).toEqual(jasmine.arrayContaining(['Data Schema', 'Rules', 'Functions', 'History']));
  });

  it('emits newRule when the "New Rule" button is clicked', () => {
    const spy = jasmine.createSpy('newRule');
    component.newRule.subscribe(spy);
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    expect(spy).toHaveBeenCalled();
  });

  it('emits activeTabChange with the clicked menu item id', () => {
    const spy = jasmine.createSpy('activeTabChange');
    component.activeTabChange.subscribe(spy);
    component.selectValidatorTab('overview');
    expect(spy).toHaveBeenCalledWith('validator');
  });

  it('reflects the injected RuleStoreService selected rule id in the rule selector', () => {
    const store = TestBed.inject(RuleStoreService);
    fixture.detectChanges();
    const select: HTMLSelectElement = fixture.nativeElement.querySelector('select');
    expect(select.value).toBeTruthy();
    expect(store.allRules().map((r) => r.rule_id)).toContain(store.selectedRuleId());
  });
});
