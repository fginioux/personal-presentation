import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinDateComponent } from './pin-date.component';

describe('PinDateComponent', () => {
  let component: PinDateComponent;
  let fixture: ComponentFixture<PinDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
