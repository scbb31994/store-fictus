import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PipComponent } from './pip/pip.component';
import { PdpComponent } from './pdp/pdp.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: PipComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'products/:id', component: PdpComponent, canActivate: [AuthGuard] },
  {
    path: 'cart',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
