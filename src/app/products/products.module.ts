import { NgModule } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent
  ],
  imports: [CommonModule],
})
export class ProductsModule {}
