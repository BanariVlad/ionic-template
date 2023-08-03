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
    children: [
      {
        path: 'tabs',
        loadChildren: () =>
          import('@/modules/tabs/tabs.module').then((m) => m.TabsPageModule),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class DefaultRouterModule {}
