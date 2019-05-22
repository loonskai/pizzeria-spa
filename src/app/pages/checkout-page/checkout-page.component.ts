import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { OrderItem } from '../../interfaces';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.sass']
})
export class CheckoutPageComponent {
  orderedPizzaItems: OrderItem[];

  constructor(private store: Store<{ cart: OrderItem[] }>) {
    this.store
      .pipe(select((state: { cart: OrderItem[] }) => state.cart))
      .subscribe(cart => {
        this.orderedPizzaItems = cart;
      });
  }

  get totalPrice() {
    return this.orderedPizzaItems.reduce((acc, item) => acc + item.price, 0);
  }
}
