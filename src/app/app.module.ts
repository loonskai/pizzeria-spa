import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared.module';

import { AppComponent } from './app.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemCardModalComponent } from './components/item-card-modal/item-card-modal.component';

import { MainPageComponent } from './pages/main-page/main-page.component';

import { JoinPipe } from './pipes/join.pipe';
import { FilterIngredientOptionsPipe } from './pipes/filter-ingredient-options.pipe';

import { cartReducer } from './reducers/cart.reducer';
import { pizzaReducer } from './reducers/pizza.reducer';
import { ingredientsReducer } from './reducers/ingredients.reducer';

import { PizzaEffects } from './effects/pizza.effects';

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    ItemListComponent,
    ItemCardModalComponent,
    JoinPipe,
    FilterIngredientOptionsPipe,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      cart: cartReducer,
      pizzaList: pizzaReducer,
      ingredients: ingredientsReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    EffectsModule.forRoot([PizzaEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
