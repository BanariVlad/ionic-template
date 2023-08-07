import { AuthGuard } from '@/guards/auth.guard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@/layouts/default/default.component').then(
        (m) => m.DefaultComponent
      ),
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
      {
        path: 'tabs',
        loadChildren: () =>
          import('@/modules/tabs/tabs.module').then((m) => m.TabsPageModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class DefaultRouterModule {}
