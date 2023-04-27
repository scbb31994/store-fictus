import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  cart: Observable<{ numOfItems: number }>;
  isLoggedIn: boolean;

  constructor(
    private router: Router,
    private cartService: CartService,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    // this.cartService.cartItemsAdded.subscribe(
    //   items => {
    //     this.cartItemsLength = items
    //   }
    // )
    this.cart = this.store.select('cart');

    this.authService.userLoginToken.subscribe((token) => {
      if (!!token) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.authService.userLoginToken.unsubscribe();
  }

  getLoginToken() {
    const doesTokenExist = localStorage.getItem('login_token');
    if (doesTokenExist) {
      return true;
    }
    return false;
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  logout() {
    this.router.navigate(['/login']);
    this.authService.userLoginToken.next(null);
    localStorage.removeItem('login_token');
  }
}
