import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { LoadingHide, LoadingShow } from './loading.actions';

export class LoadingStateModel {
  public isLoading: boolean;
}

const defaults = {
  isLoading: false,
};

@State<LoadingStateModel>({
  name: 'loading',
  defaults,
})
@Injectable()
export class LoadingState {
  @Selector()
  static isLoading(state: LoadingStateModel): boolean {
    return state.isLoading;
  }

  @Action(LoadingShow)
  showLoading({ patchState }: StateContext<LoadingStateModel>) {
    patchState({ isLoading: true });
  }

  @Action(LoadingHide)
  hideLoading({ patchState }: StateContext<LoadingStateModel>) {
    patchState({ isLoading: false });
  }
}
