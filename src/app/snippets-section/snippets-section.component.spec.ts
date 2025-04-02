import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetsSectionComponent } from './snippets-section.component';

describe('SnippetsSectionComponent', () => {
  let component: SnippetsSectionComponent;
  let fixture: ComponentFixture<SnippetsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnippetsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SnippetsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
