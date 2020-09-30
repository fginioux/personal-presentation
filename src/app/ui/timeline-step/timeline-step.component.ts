import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import InView from 'in-view-ts';

@Component({
  selector: 'app-timeline-step',
  templateUrl: './timeline-step.component.html',
  styleUrls: ['./timeline-step.component.scss']
})
export class TimelineStepComponent implements AfterViewInit {
  private _eltRef: HTMLElement;
  private _animated: boolean = false;
  private _inView: any = new InView((document.getElementsByTagName('app-root')[0] as HTMLElement));

  constructor (private elt: ElementRef, private readonly render2: Renderer2) {
    this._eltRef = elt.nativeElement;

    if (this._eltRef.className.indexOf('animate__animated') !== -1) {
      this._animated = true;
    }
  }

  ngAfterViewInit(): void {
    if (this._animated) {
      const iViewControl = this._inView.control(this._eltRef);
      iViewControl.offset({
        top: 350,
        bottom: 350
      });
      
      iViewControl.registry.on('enter', (element) => {
        this.render2.removeClass(element, 'animate__out');
        this.render2.addClass(element, 'animate__in');
      }).on('exit', (element) => {
        this.render2.addClass(element, 'animate__out');
        this.render2.removeClass(element, 'animate__in');
      });
    }
  }
}
