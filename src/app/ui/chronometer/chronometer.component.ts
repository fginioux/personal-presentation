import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.component.html',
  styleUrls: ['./chronometer.component.scss']
})
export class ChronometerComponent {
  private readonly _destroy: Subject<boolean> = new Subject();
  private _eltRef: HTMLElement;
  private _progressRef: Element;

  stopped: boolean = false;

  @Input()
  start: boolean = false;

  constructor (private _elt: ElementRef, private _render: Renderer2) {
    this._eltRef = this._elt.nativeElement;
  }

  ngAfterViewInit(): void {
    this._progressRef = this._eltRef.children[0];
  }

  ngOnChanges(): void {
    if (this.start) {
      const max = 120;
      let count = 0;
      timer(1000 * max).pipe(takeUntil(this._destroy)).subscribe(() => {
        this.start = false;
        this.stopped = !this.start;
        this._destroy.next(true);
      });

      const modulo = 2;
      const interval = window.setInterval(() => {
        const percent = ++count/max * 100;
        this._render.setStyle(this._progressRef, 'width', `${percent}%`);
      }, 1000);
    }
  }
}
