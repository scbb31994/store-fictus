import { Action } from "@ngrx/store";
import { Product } from "../product.model";

export const SET_PRODUCTS = '[Products] Set Products';
export const FETCH_PRODUCTS = '[Products] Fetch Products';
export const FETCH_PRODUCT = '[Products] Fetch Product';

export class SetProducts implements Action {
  readonly type = SET_PRODUCTS;

  constructor(public payload: Product[]){}
}

export class FetchProducts implements Action {
  readonly type = FETCH_PRODUCTS;
}

export class FetchProduct implements Action {
  readonly type = FETCH_PRODUCT;

  constructor(public payload: number) {};
}

export type ProductsActions = SetProducts | FetchProducts | FetchProduct;