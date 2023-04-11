import { Product } from '../models/product.model';

export interface CartItem extends Product {
  qty: number;
  totalPrice: number;
}

export class CartService {
  private cart: CartItem[] = [];

  getCart() {
    const cartData = localStorage.getItem('cart');

    if (cartData) {
      this.cart = JSON.parse(cartData);
      return this.cart;
    } 
    return [];
  }

  addToCart(item: Product, qty: number) {
    const totalPrice = item.price * qty;
    const cartItem = {
      ...item,
      qty,
      totalPrice
    };

    const cartData = this.getCart();


    cartData.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cartData))
    alert(`Added ${qty} item(s) to cart.`);
  }

  updateCart() {

  }

  resetCart() {
    localStorage.removeItem('cart');
    this.getCart();
  }

  removeFromCart(index: number) {}

  getTotal() {
    return this.cart.reduce((acc, cartItem) => acc + cartItem.totalPrice, 0);
  }
}
