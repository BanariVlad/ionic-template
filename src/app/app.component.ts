import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { fadeIn, fadeOut } from 'ng-animate';
import { Observable } from 'rxjs';
import { LoadingState } from './store/loading/loading.state';
import { SetTheme } from './store/theme/theme.actions';

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
export class AppComponent implements OnInit {
  @Select(LoadingState.isLoading) isLoading$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    this.store.dispatch(new SetTheme(prefersDark.matches));

    prefersDark.addEventListener('change', (mediaQuery) =>
      this.store.dispatch(new SetTheme(mediaQuery.matches))
    );
  }
}
