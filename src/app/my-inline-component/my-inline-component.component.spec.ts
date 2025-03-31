import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInlineComponentComponent } from './my-inline-component.component';

describe('MyInlineComponentComponent', () => {
  let component: MyInlineComponentComponent;
  let fixture: ComponentFixture<MyInlineComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyInlineComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyInlineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
