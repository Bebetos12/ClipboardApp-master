import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowSectionComponent } from './workflow-section.component';

describe('WorkflowSectionComponent', () => {
  let component: WorkflowSectionComponent;
  let fixture: ComponentFixture<WorkflowSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkflowSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
