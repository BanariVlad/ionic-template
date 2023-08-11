import { Injectable } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetTheme } from './theme.actions';

export class ThemeStateModel {
  public dark: boolean;
}

const defaults: ThemeStateModel = {
  dark: false,
};

@State<ThemeStateModel>({
  name: 'theme',
  defaults,
})
@Injectable()
export class ThemeState {
  @Selector()
  static isDark(state: ThemeStateModel): boolean {
    return state.dark;
  }

  @Action(SetTheme)
  setTheme(
    { patchState }: StateContext<ThemeStateModel>,
    { isDark }: SetTheme
  ) {
    patchState({ dark: isDark });

    this.toggleDarkTheme(isDark);
  }

  async toggleDarkTheme(shouldAdd: boolean) {
    document.body.classList.toggle('dark', shouldAdd);

    await StatusBar.setStyle({ style: shouldAdd ? Style.Dark : Style.Light });
  }
}
