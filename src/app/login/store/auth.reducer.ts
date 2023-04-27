import { AuthActions, LOGIN, LOGOUT } from './auth.actions';

export interface User {
  user: { username: string; token: string };
}

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

export function authReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case LOGIN:
      return state;
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
}
