import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {
  cartItemsLength: number;
  isLoggedIn: boolean;

  constructor(private router: Router, private cartService: CartService, private authService: AuthService) {}

  ngOnInit(): void {
    this.cartService.cartItemsAdded.subscribe(
      items => {
        this.cartItemsLength = items
      }
    )

    this.authService.userLoginToken.subscribe(
      token => {
        if (!!token) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      }
    )
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
    this.router.navigate(['/cart'])
  }

  logout() {
    this.router.navigate(['/login'])
    this.authService.userLoginToken.next(null);
    localStorage.removeItem('login_token')
  }
}
