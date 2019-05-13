import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { BasketCardComponent } from './components/basket-card/basket-card.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { ItemCardModalComponent } from './components/item-card-modal/item-card-modal.component';
import { RadioGroupButtonComponent } from './components/radio-group-button/radio-group-button.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    BasketCardComponent,
    ItemListComponent,
    AddButtonComponent,
    ItemCardModalComponent,
    RadioGroupButtonComponent,
    RadioButtonComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
