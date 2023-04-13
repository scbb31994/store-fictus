import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/cart-item.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  cart: CartItem[];
  totalPrice: number;
  totalPriceSubscription: Subscription;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.totalPriceSubscription = this.cartService.totalPriceUpdated.subscribe(
      totalPrice => {
        this.totalPrice = totalPrice;
      }
    )

    this.cart = this.cartService.getCart();
  }

  ngOnDestroy(): void {
    this.totalPriceSubscription.unsubscribe()
  }

  resetCart() {
    this.cartService.resetCart();
  }

  goToShop() {
    this.router.navigate(['/']);
  }
}
