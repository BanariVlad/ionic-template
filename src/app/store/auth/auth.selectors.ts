import { createSelector } from '@ngrx/store';
import { AppState } from '..';

export interface AuthState {
  user: any;
  token: string;
}

export const selectFeature = (state: AppState) => state.auth;

export const selectUser = createSelector(
  selectFeature,
  (state: AuthState) => state.user
);
