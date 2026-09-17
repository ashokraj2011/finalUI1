import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: appConfig.providers,
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => localStorage.clear());

  // @ac:X-USECASE:AC-001
  it('presents a console shell with sidebar navigation, top bar, and a context-aware header that updates on tab switch', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('app-sidebar')).toBeTruthy();
    expect(el.querySelector('app-top-nav-bar')).toBeTruthy();

    expect(component.getHeaderTitle()).toBe('Rule Designer');

    component.handleActiveTabChange('schema');
    fixture.detectChanges();
    expect(component.getHeaderTitle()).toBe('Data Schema Explorer');

    component.handleActiveTabChange('history');
    fixture.detectChanges();
    expect(component.getHeaderTitle()).toBe('Execution History logs');
  });

  // @ac:X-USECASE:AC-002
  it('supports General Logic and Decision Table ruleset modes and switches designer/canvas/config sub-views without reloading', () => {
    const el: HTMLElement = fixture.nativeElement;

    expect(component.activeRuleType).toBe('general');
    expect(component.rulesetsSubView).toBe('designer');
    expect(el.querySelector('app-rule-sets')).toBeTruthy();

    component.rulesetsSubView = 'canvas';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-rule-canvas')).toBeTruthy();

    component.rulesetsSubView = 'config';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-rule-config')).toBeTruthy();

    component.activeRuleType = 'decisionTable';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-decision-table')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-rule-config')).toBeFalsy();
  });

  // @ac:X-USECASE:AC-003
  it('surfaces a status notification on publish and exposes validator/history views for execution review', () => {
    component.handlePublish();
    fixture.detectChanges();

    expect(component.notification).toContain('published');
    const toast: HTMLElement | null = fixture.nativeElement.querySelector('[role="status"][aria-live="assertive"]');
    expect(toast).toBeTruthy();

    component.handleActiveTabChange('validator');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-shell')).toBeTruthy();

    component.handleActiveTabChange('history');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-history-logs')).toBeTruthy();
  });
});
