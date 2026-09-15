import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataSchemaComponent } from './data-schema.component';

describe('DataSchemaComponent', () => {
  let fixture: ComponentFixture<DataSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSchemaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataSchemaComponent);
    fixture.componentInstance.fields = [];
    fixture.detectChanges();
  });

  it('colors the rule-authoring content red', () => {
    const heading = fixture.nativeElement.querySelector('h2');
    const summary = fixture.nativeElement.querySelector('p');

    const hasRedHeading = heading.classList.contains('text-red-600') || heading.classList.contains('text-red-700');
    const hasRedSummary = summary.classList.contains('text-red-600') || summary.classList.contains('text-red-500') || summary.classList.contains('text-red-700');

    expect(hasRedHeading).toBeTrue();
    expect(hasRedSummary).toBeTrue();
  });
});
