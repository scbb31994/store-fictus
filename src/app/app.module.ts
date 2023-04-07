import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PipComponent } from './pip/pip.component';
import { PdpComponent } from './pdp/pdp.component';
import { CartComponent } from './cart/cart.component';
import { ProductItemComponent } from './pip/product-item/product-item.component';
import { CartItemsComponent } from './cart/cart-items/cart-items.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { ProductsService } from './shared/products.service';
import { CartService } from './cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PipComponent,
    PdpComponent,
    CartComponent,
    ProductItemComponent,
    CartItemsComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
