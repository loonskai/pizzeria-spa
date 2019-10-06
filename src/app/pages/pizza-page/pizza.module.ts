import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared.module';
import { PizzaRoutingModule } from './pizza-routing.module';

import { PizzaResolver } from './pizza.resolver';

import { PizzaPageComponent } from '../pizza-page/pizza-page.component';

import { KeysPipe } from '../../pipes/keys.pipe';

@NgModule({
  declarations: [PizzaPageComponent, KeysPipe],
  imports: [CommonModule, SharedModule, PizzaRoutingModule],
  providers: [PizzaResolver]
})
export class PizzaModule {}
