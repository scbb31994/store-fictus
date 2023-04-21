import { Product } from "../../models/product.model";

export interface CartItem extends Product {
  qty: number;
  totalPrice: number;
}
