import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PipComponent } from './components/pages/pip/pip.component';
import { PdpComponent } from './components/pages/pdp/pdp.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { ProductItemComponent } from './components/pages/pip/product-item/product-item.component';
import { CartItemsComponent } from './components/pages/cart/cart-items/cart-items.component';
import { CartItemComponent } from './components/pages/cart/cart-item/cart-item.component';
import { ProductsService } from './services/products.service';
import { CartService } from './services/cart.service';
import { LoginComponent } from './components/pages/login/login.component';

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
    CartItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProductsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
