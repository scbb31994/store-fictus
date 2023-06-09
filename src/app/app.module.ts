import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CartService } from './services/cart.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
// import { LoginModule } from './login/login.module';
// import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { ProductDetailModule } from './product-detail/product-detail.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './products/store/products.effects';
import { appReducer } from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([ProductsEffects]),
    // LoginModule,
    // CartModule,
    // PipModule,
    // PdpModule,
    ProductsModule,
    ProductDetailModule
  ],
  providers: [CartService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
