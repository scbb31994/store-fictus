import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartItemComponent } from './cart-item/cart-item.component';
// import { AuthGuard } from '../services/auth-guard.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartComponent, CartItemsComponent, CartItemComponent],
  imports: [
    // SharedModule
    CommonModule, // replace with shared module once complete
    RouterModule.forChild([{ path: '', component: CartComponent }]),
  ],
})
export class CartModule {}
