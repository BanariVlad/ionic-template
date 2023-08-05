import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private store: Store) {}

  login(): void {
    const props = {
      user: {
        name: 'John Doe',
        role: 'admin',
      },
      token: '1234567890',
    };

    this.store.dispatch({
      type: '[Auth] Login',
      props,
    });

    this.router.navigate(['/tabs']);
  }
}
