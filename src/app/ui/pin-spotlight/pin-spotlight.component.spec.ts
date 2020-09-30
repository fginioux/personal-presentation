import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinSpotlightComponent } from './pin-spotlight.component';

describe('PinSpotlightComponent', () => {
  let component: PinSpotlightComponent;
  let fixture: ComponentFixture<PinSpotlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinSpotlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinSpotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
