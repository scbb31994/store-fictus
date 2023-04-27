import { Product } from '../../products/product.model';

export interface CartItem extends Product {
  qty: number;
  totalPrice: number;
}
