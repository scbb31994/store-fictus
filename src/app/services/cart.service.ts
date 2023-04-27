import { Product } from '../products/product.model';
import { CartItem } from '../cart/cart-item/cart-item.model';
import { Subject } from 'rxjs';

export class CartService {
  private cart: CartItem[] = [];
  cartItemsAdded = new Subject<number>();
  
  totalPriceUpdated = new Subject<number>();
  totalPrice: number = 0;

  getCart() {
    const cartData = localStorage.getItem('cart');

    if (cartData) {
      this.cart = JSON.parse(cartData);
      this.totalPriceUpdated.next(this.calculateTotal());
      return this.cart;
    } 
    this.totalPriceUpdated.next(0);
    this.cartItemsAdded.next(this.getCartLength());
    return [];
  }

  addToCart(item: Product, qty: number) {
    const totalPrice = item.price * qty;
    const cartItem = {
      ...item,
      qty,
      totalPrice
    };

    this.cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(this.cart))
    this.totalPriceUpdated.next(this.calculateTotal());
    this.cartItemsAdded.next(this.getCartLength());
    alert(`Added ${qty} item(s) to cart.`);
  }

  getCartLength() {
    return this.cart.reduce((acc, cartItem) => acc + cartItem.qty, 0)
  }

  resetCart() {
    localStorage.removeItem('cart');
    this.getCart();
  }

  removeFromCart(id: number, qty: number) {
    const itemIndex = this.cart.findIndex(item => item.id === id && item.qty === qty);
    this.cart.splice(itemIndex, 1)
    if (this.cart.length === 0) {
      localStorage.removeItem('cart');  
    } else {
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
    this.totalPriceUpdated.next(this.calculateTotal())
    this.cartItemsAdded.next(this.getCartLength());
  }

  calculateTotal() {
    return this.cart.reduce((acc, cartItem) => acc + cartItem.totalPrice, 0);
  }
}
