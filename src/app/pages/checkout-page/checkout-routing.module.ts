import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckoutPageComponent } from '../../pages/checkout-page/checkout-page.component';

const checkoutRoutes: Routes = [
  { path: 'checkout', component: CheckoutPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(checkoutRoutes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule {}
