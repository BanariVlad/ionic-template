import { AuthState } from '@/store/auth/auth.selectors';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth$: Observable<AuthState>;

  constructor(private store: Store) {
    // this.auth$ = this.store.select('auth');
  }

  get isAuthenticated(): boolean {
    // let authenticated = false;

    // this.auth$.subscribe((auth) => {
    // authenticated = !!auth.token;
    // });

    // return authenticated;
    return false;
  }
}
