import { NgModule } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ProductDetailComponent }]),
  ],
})
export class ProductDetailModule {}
