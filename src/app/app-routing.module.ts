import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PipComponent } from './components/pages/pip/pip.component';
import { PdpComponent } from './components/pages/pdp/pdp.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: PipComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'products/:id', component: PdpComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
