import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessAnywhereSectionComponent } from './access-anywhere-section.component';

describe('AccessAnywhereSectionComponent', () => {
  let component: AccessAnywhereSectionComponent;
  let fixture: ComponentFixture<AccessAnywhereSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessAnywhereSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessAnywhereSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
