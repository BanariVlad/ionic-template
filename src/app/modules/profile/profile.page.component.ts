import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile.page',
  templateUrl: './profile.page.component.html',
  styleUrls: ['./profile.page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  themeToggle = false;

  ngOnInit() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    this.initializeDarkTheme(prefersDark.matches);

    prefersDark.addEventListener('change', (mediaQuery) =>
      this.initializeDarkTheme(mediaQuery.matches)
    );
  }

  initializeDarkTheme(isDark: boolean) {
    this.themeToggle = isDark;
    this.toggleDarkTheme(isDark);
  }

  toggleChange(event: any) {
    this.toggleDarkTheme(event.detail.checked);
  }

  toggleDarkTheme(shouldAdd: boolean) {
    document.body.classList.toggle('dark', shouldAdd);
  }
}
