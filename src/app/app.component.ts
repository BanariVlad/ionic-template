import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { fadeIn, fadeOut } from 'ng-animate';
import { Observable } from 'rxjs';
import { LoadingState } from './store/loading/loading.state';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  animations: [
    trigger('fade', [
      transition(
        'void => *',
        useAnimation(fadeIn, {
          params: { timing: 0 },
        })
      ),
      transition(
        '* => void',
        useAnimation(fadeOut, {
          params: { timing: 0.3 },
        })
      ),
    ]),
  ],
})
export class AppComponent {
  @Select(LoadingState.isLoading) isLoading$: Observable<boolean>;
}
