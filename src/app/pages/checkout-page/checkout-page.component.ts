import { Component, OnInit } from '@angular/core';

import { order } from '../../../mocks';
import { OrderItem } from '../../interfaces';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.sass']
})
export class CheckoutPageComponent implements OnInit {
  orderedPizzaItems: OrderItem[];

  constructor(private pizzaService: PizzaService) {}

  ngOnInit() {
    this.orderedPizzaItems = order;
    this.orderedPizzaItems = this.orderedPizzaItems.map(orderItem => ({
      ...orderItem,
      pizzaDetails: this.pizzaService.getOneById(orderItem.pizzaID)
    })); // TODO: Pass order population to OrderService
  }

  get totalPrice() {
    return this.orderedPizzaItems.reduce((acc, item) => acc + item.price, 0);
  }
}
