import { Component, Input } from '@angular/core';
import { CartItem } from './cart-item.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { RemoveFromCart } from '../store/cart.actions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cartItem: CartItem;
  @Input() cartItemIndex: number;

  constructor(private store: Store<AppState>) {}

  removeFromCart() {
    this.store.dispatch(new RemoveFromCart(this.cartItemIndex))
  }

}
