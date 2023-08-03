import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthRouterModule } from './router/auth.router.module';
import { DefaultRouterModule } from './router/default.router.module';

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    AuthRouterModule,
    DefaultRouterModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
