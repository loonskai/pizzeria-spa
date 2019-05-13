import { Component, Input } from '@angular/core';

import { PizzaItem } from '../../interfaces';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.component.sass']
})
export class ItemCardComponent {
  @Input('pizzaItem') pizza: PizzaItem;
  isModalOpen: boolean = true; //false on default

  openCardModal() {
    this.isModalOpen = true;
  }
}
