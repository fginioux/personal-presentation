import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineRefsComponent } from './timeline-refs.component';

describe('TimelineRefsComponent', () => {
  let component: TimelineRefsComponent;
  let fixture: ComponentFixture<TimelineRefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineRefsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineRefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
