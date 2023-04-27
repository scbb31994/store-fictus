import { ActionReducerMap } from "@ngrx/store";
import { AuthState, authReducer } from "../login/store/auth.reducer";
import { CartState, cartReducer } from "../cart/store/cart.reducer";

export interface AppState {
  auth: AuthState,
  cart: CartState
}

export const appReducer: ActionReducerMap<AppState> = {
  // @ts-ignore
  auth: authReducer,
  // @ts-ignore
  cart: cartReducer
}