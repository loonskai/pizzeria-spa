import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { BasketCardComponent } from './basket-card/basket-card.component';
import { ItemListComponent } from './item-list/item-list.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { ItemCardModalComponent } from './item-card-modal/item-card-modal.component';

@NgModule({
  declarations: [AppComponent, ItemCardComponent, BasketCardComponent, ItemListComponent, AddButtonComponent, ItemCardModalComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
