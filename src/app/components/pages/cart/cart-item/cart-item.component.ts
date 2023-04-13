import { Component, Input } from '@angular/core';
// import { Product } from '../../models/product.model';
import { CartItem } from '../../../../models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cartItem: CartItem;

  constructor(private cartService: CartService) {}

  removeFromCart() {
    this.cartService.removeFromCart(this.cartItem.id, this.cartItem.qty) // -1 to get proper array index
  }

}
