import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { ItemCardModalComponent } from './components/item-card-modal/item-card-modal.component';
import { RadioGroupButtonComponent } from './components/radio-group-button/radio-group-button.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';

import { JoinPipe } from './pipes/join.pipe';
import { FilterIngredientOptionsPipe } from './pipes/filter-ingredient-options.pipe';
import { ShoppingCartCardComponent } from './components/shopping-cart-card/shopping-cart-card.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { PizzaPageComponent } from './pages/pizza-page/pizza-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    ItemListComponent,
    MainButtonComponent,
    ItemCardModalComponent,
    RadioGroupButtonComponent,
    RadioButtonComponent,
    JoinPipe,
    FilterIngredientOptionsPipe,
    ShoppingCartCardComponent,
    MainPageComponent,
    CheckoutPageComponent,
    PizzaPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
