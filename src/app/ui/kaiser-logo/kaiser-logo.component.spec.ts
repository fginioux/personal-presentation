import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaiserLogoComponent } from './kaiser-logo.component';

describe('KaiserLogoComponent', () => {
  let component: KaiserLogoComponent;
  let fixture: ComponentFixture<KaiserLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaiserLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaiserLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
