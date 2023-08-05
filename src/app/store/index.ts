import { authReducer } from './auth/auth.reducers';
import { AuthState } from './auth/auth.selectors';

export interface AppState {
  auth: AuthState;
}

const reducers = { auth: authReducer };

const config = {};

export { config, reducers };
