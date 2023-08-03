import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: 'auth',
    loadComponent: () =>
      import('@/layouts/auth/auth.component').then((m) => m.AuthComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@/modules/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('@/modules/registration/registration.component').then(
            (m) => m.RegistrationComponent
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AuthRouterModule {}
