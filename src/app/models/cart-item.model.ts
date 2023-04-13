import { Product } from "./product.model";

export interface CartItem extends Product {
  qty: number;
  totalPrice: number;
}