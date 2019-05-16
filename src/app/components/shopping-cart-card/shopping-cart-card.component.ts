import { Component, OnInit } from '@angular/core';

import { PizzaItem, OrderItem } from '../../interfaces';
import { pizzaData, order } from '../../../mocks';

@Component({
  selector: 'shopping-cart-card',
  templateUrl: './shopping-cart-card.component.html',
  styleUrls: ['./shopping-cart-card.component.sass']
})
export class ShoppingCartCardComponent implements OnInit {
  itemsAmount: number = 2;
  pizzaData: PizzaItem[] = pizzaData;
  order: OrderItem[] = order;

  constructor() {}

  ngOnInit() {
    this.order = this.order.map(orderItem => ({
      ...orderItem,
      pizzaDetails: pizzaData.find(pizza => pizza.id === orderItem.pizzaID)
    }));
    console.log(this.order);
  }
}
