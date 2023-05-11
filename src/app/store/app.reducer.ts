import { ActionReducerMap } from "@ngrx/store";
import { AuthState, authReducer } from "../login/store/auth.reducer";
import { CartState, cartReducer } from "../cart/store/cart.reducer";
import { ProductsState, productsReducer } from "../products/store/products.reducers";

export interface AppState {
  auth: AuthState,
  cart: CartState
  products: ProductsState
}

export const appReducer: ActionReducerMap<AppState> = {
  // @ts-ignore
  auth: authReducer,
  // @ts-ignore
  cart: cartReducer,
  // @ts-ignore
  products: productsReducer
}