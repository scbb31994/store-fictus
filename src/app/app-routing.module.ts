import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PipComponent } from './pip/pip.component';
import { PdpComponent } from './pdp/pdp.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: PipComponent},
  { path: 'login', component: LoginComponent },
  { path: 'products/:id', component: PdpComponent },
  { path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
