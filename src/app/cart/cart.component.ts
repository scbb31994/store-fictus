import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from './cart-item/cart-item.model';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { ClearCart } from './store/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  // cart: CartItem[];
  cart: Observable<{cart: CartItem[], total: number}>;
  totalPrice: number;
  totalPriceSubscription: Subscription;

  constructor(private cartService: CartService, private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.totalPriceSubscription = this.cartService.totalPriceUpdated.subscribe(
    //   totalPrice => {
    //     this.totalPrice = totalPrice;
    //   }
    // )

    // this.cart = this.cartService.getCart();
    this.cart = this.store.select('cart')
  }

  ngOnDestroy(): void {
    // test will throw error if subscription that doesn't exist unsubs
    // if (this.totalPriceSubscription) {
    //   this.totalPriceSubscription.unsubscribe()
    // }
  }

  // for testing purposes
  viewCart() {
  }

  resetCart() {
    this.store.dispatch(new ClearCart())
  }

  goToShop() {
    this.router.navigate(['/']);
  }
}
