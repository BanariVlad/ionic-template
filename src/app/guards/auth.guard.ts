import { AuthService } from '@/services/auth.service';
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

const auth = inject(AuthService);

export const authGuard: CanActivateFn = (route, state) => {
  return auth.isAuthenticated;
};
