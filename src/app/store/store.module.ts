import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { LoadingState } from './loading/loading.state';
import { ThemeState } from './theme/theme.state';
import { UserState } from './user/user.state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([UserState, LoadingState, ThemeState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
})
export class StoreModule {}
