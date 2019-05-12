import { Component, Input } from '@angular/core';

import { PizzaItem } from '../../interfaces';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.component.sass']
})
export class ItemCardComponent {
  @Input('pizzaItem') pizza: PizzaItem;
  openModalStatus: string = '';

  openCardModal() {
    this.openModalStatus = 'this is modal window';
  }
}
