import { Action } from '@ngrx/store';
import { CartItem } from '../../cart/cart-item/cart-item.model';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
export const CLEAR_CART = 'CLEAR_CART';

export class AddToCart implements Action {
  readonly type = ADD_TO_CART;

  constructor(public payload: CartItem) {}
}

export class RemoveFromCart implements Action {
  readonly type = REMOVE_FROM_CART;

  // will use index to filter out unwaned cart item
  constructor(public payload: number) {}
}

export class UpdateCartItem implements Action {
  readonly type = UPDATE_CART_ITEM;

  // will use edited item index to update cart item
  constructor(public payload: CartItem) {}
}

export class ClearCart implements Action {
  readonly type = CLEAR_CART;
}

export type CartActions =
  | AddToCart
  | RemoveFromCart
  | UpdateCartItem
  | ClearCart;
