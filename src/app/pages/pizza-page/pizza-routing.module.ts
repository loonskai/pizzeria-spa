import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PizzaPageComponent } from './pizza-page.component';
import { PizzaResolver } from 'src/app/pizza.resolver';

const pizzaRoutes: Routes = [
  {
    path: ':id',
    component: PizzaPageComponent,
    resolve: { pizzaItem: PizzaResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(pizzaRoutes)],
  exports: [RouterModule]
})
export class PizzaRoutingModule {}
