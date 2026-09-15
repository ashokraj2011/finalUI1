import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent rule-authoring view', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    spyOn(window, 'fetch').and.returnValue(Promise.resolve({
      json: async () => []
    } as Response));

    await TestBed.configureTestingModule({
      imports: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('@ac:COLOR-RED:AC-001 renders visible default-view text in CSS red', () => {
    const root = fixture.nativeElement.querySelector('.rule-authoring-scope') as HTMLElement;
    expect(root).not.toBeNull();

    const textElements = Array.from(root.querySelectorAll<HTMLElement>(
      'h1, h2, h3, h4, h5, h6, p, span, label, button, a, input, textarea, select, option'
    )).filter((element) => element.textContent?.trim() || element instanceof HTMLInputElement);

    expect(textElements.length).toBeGreaterThan(0);
    textElements.forEach((element) => {
      expect(getComputedStyle(element).color).toBe('rgb(255, 0, 0)');
    });
  });

  it('@ac:COLOR-RED:AC-002 preserves the default authoring structure and controls', () => {
    const root = fixture.nativeElement as HTMLElement;

    expect(root.querySelector('app-sidebar')).not.toBeNull();
    expect(root.querySelector('app-top-nav-bar')).not.toBeNull();
    expect(root.querySelector('app-rule-sets')).not.toBeNull();
    expect(root.querySelector('button')).not.toBeNull();
  });
});