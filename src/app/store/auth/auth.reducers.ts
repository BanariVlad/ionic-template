import { createReducer, on } from '@ngrx/store';
import { login } from './auth.actions';

export const initialState = {
  user: null,
  token: '',
};

export const authReducer = createReducer(
  initialState,
  on(login, (state) => ({
    ...state,
  }))
);
