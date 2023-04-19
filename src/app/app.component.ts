import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'store-fictus';
  constructor(private productsService: ProductsService, private authService: AuthService) {}

  ngOnInit(): void {
    this.productsService.fetchProducts();
    this.authService.autoLogin();
  }
}
