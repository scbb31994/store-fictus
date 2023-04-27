import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartComponent, CartItemComponent],
  imports: [
    // SharedModule
    CommonModule, // replace with shared module once complete
    RouterModule.forChild([{ path: '', component: CartComponent }]),
  ],
})
export class CartModule {}
