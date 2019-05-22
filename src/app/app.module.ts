import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared.module';
import { CheckoutModule } from './pages/checkout-page/checkout.module';

import { AppComponent } from './app.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemCardModalComponent } from './components/item-card-modal/item-card-modal.component';
import { RadioGroupButtonComponent } from './components/radio-group-button/radio-group-button.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { ShoppingCartCardComponent } from './components/shopping-cart-card/shopping-cart-card.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { PizzaPageComponent } from './pages/pizza-page/pizza-page.component';

import { JoinPipe } from './pipes/join.pipe';
import { FilterIngredientOptionsPipe } from './pipes/filter-ingredient-options.pipe';
import { KeysPipe } from './pipes/keys.pipe';

import { cartReducer } from './reducers/cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    ItemListComponent,
    ItemCardModalComponent,
    RadioGroupButtonComponent,
    RadioButtonComponent,
    JoinPipe,
    FilterIngredientOptionsPipe,
    ShoppingCartCardComponent,
    MainPageComponent,
    PizzaPageComponent,
    KeysPipe,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CheckoutModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    StoreModule.forRoot({ cart: cartReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  entryComponents: [SnackbarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
