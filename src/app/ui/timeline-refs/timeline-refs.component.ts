import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-refs',
  templateUrl: './timeline-refs.component.html',
  styleUrls: ['./timeline-refs.component.scss']
})
export class TimelineRefsComponent implements OnInit {
  @Input()
  data: any = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
