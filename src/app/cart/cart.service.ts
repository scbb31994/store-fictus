import { Product } from '../models/product.model';

interface CartItem extends Product {
  qty: number;
}

export class CartService {
  private cart: CartItem[] = [];

  getCart() {
    return this.cart;
  }

  addToCart(item: Product, qty: number) {
    const cartItem = {
      ...item,
      qty
    };

    this.cart.push(cartItem);
    alert(`Added ${qty} item(s) to cart.`);
  }

  removeFromCart() {}

  getTotal() {
    return this.cart.reduce((acc, cartItem) => acc + cartItem.price, 0);
  }
}
