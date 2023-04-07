import { Product } from "../models/product.model";

export class CartService {
  private cart: Product[] = [];

  getCart() {
    return this.cart;
  }

  addToCart(item: Product) {
    this.cart.push(item);
    alert('Item added to cart.')
  }

  removeFromCart() {

  }

  getTotal() {
    return this.cart.reduce((acc, cartItem) => acc + cartItem.price, 0);
  }
}