import { CartItem } from '../cart-item/cart-item.model';
import {
  CartActions,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM,
  CLEAR_CART,
} from './cart.actions';

export interface CartState {
  cart: CartItem[];
  editedCartItem: CartItem | null;
  editedCartItemIndex: number;
  total: number;
  numOfItems: number;
}

const initialState: CartState = {
  cart: [],
  editedCartItem: null,
  editedCartItemIndex: -1,
  total: 0,
  numOfItems: 0
};

export function cartReducer(state = initialState, action: CartActions) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.totalPrice,
        numOfItems: state.numOfItems + action.payload.qty
      };
    case REMOVE_FROM_CART:
      console.log('removed item');
      return {
        ...state,
        cart: state.cart.filter((_cartItem, index) => {
          return index !== action.payload;
        }),
        total: state.total - state.cart[action.payload].totalPrice,
        numOfItems: state.numOfItems - state.cart[action.payload].qty
      };
    case UPDATE_CART_ITEM:
      const cartItem = state.cart[state.editedCartItemIndex];
      const updatedCartItem = {
        ...cartItem,
        ...action.payload,
      };

      const updatedCart = [...state.cart];
      updatedCart[state.editedCartItemIndex] = updatedCartItem;

      return {
        ...state,
        cart: updatedCart,
        editedCartItem: null,
        editeCartItemIndex: -1,
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
        total: 0,
        numOfItems: 0
      };
    default:
      return state;
  }
}
