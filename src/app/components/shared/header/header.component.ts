import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItemsLength: number;

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItemsAdded.subscribe(
      items => {
        this.cartItemsLength = items
      }
    )
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
    localStorage.removeItem('login_token')
  }
}
