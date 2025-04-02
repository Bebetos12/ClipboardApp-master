import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformDownloadSectionComponent } from './platform-download-section.component';

describe('PlatformDownloadSectionComponent', () => {
  let component: PlatformDownloadSectionComponent;
  let fixture: ComponentFixture<PlatformDownloadSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformDownloadSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlatformDownloadSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
