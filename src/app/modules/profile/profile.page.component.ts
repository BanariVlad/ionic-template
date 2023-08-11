import { SetTheme } from '@/store/theme/theme.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-profile.page',
  templateUrl: './profile.page.component.html',
  styleUrls: ['./profile.page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  themeToggle = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    this.themeToggle = prefersDark.matches;

    prefersDark.addEventListener('change', (mediaQuery) => {
      this.themeToggle = mediaQuery.matches;
    });
  }

  initializeDarkTheme(isDark: boolean): void {
    this.themeToggle = isDark;

    this.store.dispatch(new SetTheme(isDark));
  }

  toggleChange(event: any): void {
    this.store.dispatch(new SetTheme(event.detail.checked));
  }
}
