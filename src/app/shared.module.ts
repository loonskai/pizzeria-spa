import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainButtonComponent } from './components/main-button/main-button.component';
import { RadioGroupButtonComponent } from './components/radio-group-button/radio-group-button.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { ShoppingCartCardComponent } from './components/shopping-cart-card/shopping-cart-card.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    MainButtonComponent,
    RadioGroupButtonComponent,
    RadioButtonComponent,
    ShoppingCartCardComponent,
    LoaderComponent
  ],
  exports: [
    MainButtonComponent,
    RadioGroupButtonComponent,
    RadioButtonComponent,
    ShoppingCartCardComponent,
    LoaderComponent
  ],
  imports: [CommonModule]
})
export class SharedModule {}
