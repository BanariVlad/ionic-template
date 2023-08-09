import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { UserLogin, UserLogout } from './user.actions';

export class UserStateModel {
  public user: any | null;
}

const credentials: string | null = localStorage.getItem('credentials');

const defaults = {
  user: credentials ? JSON.parse(credentials) : null,
};

@State<UserStateModel>({
  name: 'user',
  defaults,
})
@Injectable()
export class UserState {
  @Action(UserLogin)
  login({ setState }: StateContext<UserStateModel>, { user }: any) {
    localStorage.setItem('credentials', JSON.stringify(user));

    setState({ user: { ...user } });
  }

  @Action(UserLogout)
  logout({ setState }: StateContext<UserStateModel>) {
    localStorage.removeItem('credentials');

    setState({ user: null });
  }
}
