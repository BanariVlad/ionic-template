import { AuthService } from '@/services/auth.service';
import { Component } from '@angular/core';
import { NestedPageRootComponent } from './components/nested-page-root/nested-page-root.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  root = NestedPageRootComponent;

  constructor(private authService: AuthService) {
    console.log('Tab1Page constructor', authService.isAuthenticated);
  }
}
