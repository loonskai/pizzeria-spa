import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PizzaPageComponent } from './pizza-page.component';

const pizzaRoutes: Routes = [{ path: ':id', component: PizzaPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(pizzaRoutes)],
  exports: [RouterModule]
})
export class PizzaRoutingModule {}
