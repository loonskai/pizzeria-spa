import { Component, OnInit } from '@angular/core';

import { OrderItem } from '../../interfaces';
import { order } from '../../../mocks';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'shopping-cart-card',
  templateUrl: './shopping-cart-card.component.html',
  styleUrls: ['./shopping-cart-card.component.sass']
})
export class ShoppingCartCardComponent implements OnInit {
  itemsAmount: number = 2;
  orderedPizzaItems: OrderItem[] = order;

  constructor(private pizzaService: PizzaService) {}

  ngOnInit() {
    this.orderedPizzaItems = this.orderedPizzaItems.map(orderItem => ({
      ...orderItem,
      pizzaDetails: this.pizzaService.getOneById(orderItem.pizzaID)
    }));
  }
}
