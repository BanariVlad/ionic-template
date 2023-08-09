import { LoadingHide, LoadingShow } from '@/store/loading/loading.actions';
import { UserLogin } from '@/store/user/user.actions';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngxs/store';

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

    this.store.dispatch(new UserLogin(props));

    this.store.dispatch(new LoadingShow());

    this.router.navigate(['/tabs/tab3']);

    setTimeout(() => {
      this.store.dispatch(new LoadingHide());
    }, 2000);
  }
}
