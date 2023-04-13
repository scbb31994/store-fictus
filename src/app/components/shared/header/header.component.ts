import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}

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
