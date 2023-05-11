import { Product } from "../product.model";
import {  ProductsActions, SET_PRODUCTS } from "./products.actions";

export interface ProductsState {
  products: Product[];
  isLoading: boolean;
};

const initialState: ProductsState = {
  products: [],
  isLoading: false
};

export function productsReducer(
  state = initialState,
  action: ProductsActions
) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    default:
      return state;
  }
}