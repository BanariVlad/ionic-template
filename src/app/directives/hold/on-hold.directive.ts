import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Observable, Subject, filter, interval, takeUntil, tap } from 'rxjs';

@Directive({
  selector: '[holdable]',
})
export class OnHoldDirective {
  /**
   * HOW TO USE
   *
   * <div holdable [holdTime]="500" (onHold)="holdHandler(anything)"></div>
   */

  @Input() holdTime: number = 100; // time in ms
  @Output() onHold: EventEmitter<number> = new EventEmitter();

  state: Subject<string> = new Subject();
  cancel: Observable<string>;

  constructor() {
    this.cancel = this.state.pipe(
      filter((v) => v === 'cancel')
      // tap(v => this.onHold.emit(0))
    );
  }

  @HostListener('touchend', ['$event'])
  @HostListener('touchcancel', ['$event'])
  @HostListener('touchmove', ['$event'])
  @HostListener('mouseup', ['$event'])
  @HostListener('mouseleave', ['$event'])
  @HostListener('mousemove', ['$event'])
  onExit() {
    this.state.next('cancel');
  }

  @HostListener('mousedown', ['$event'])
  @HostListener('touchstart', ['$event'])
  startHold($event: any) {
    this.state.next('start');
    const n = 100;
    interval(n)
      .pipe(
        takeUntil(this.cancel),
        tap((v) => {
          if (this.holdTime) {
            if (v * n >= this.holdTime) {
              this.onHold.emit($event);
              this.state.next('cancel');
            }
          } else {
            this.onHold.emit($event);
          }
        })
      )
      .subscribe();
  }
}
