import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[];
  totalPrice: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotal();
  }


}
