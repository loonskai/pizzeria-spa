import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { OrderItem } from '../../interfaces';
import { ClearCart } from 'src/app/actions/cart.actions';

@Component({
  selector: 'shopping-cart-card',
  templateUrl: './shopping-cart-card.component.html',
  styleUrls: ['./shopping-cart-card.component.sass']
})
export class ShoppingCartCardComponent {
  orderedPizzaItems: OrderItem[];

  constructor(private store: Store<{ cart: OrderItem[] }>) {
    this.store
      .pipe(select((state: { cart: OrderItem[] }) => state.cart))
      .subscribe(cart => {
        this.orderedPizzaItems = cart;
      });
  }

  clearCart() {
    this.store.dispatch(new ClearCart());
  }

  get totalPrice() {
    return this.orderedPizzaItems.length === 0
      ? 0
      : this.orderedPizzaItems.reduce((acc, item) => acc + item.price, 0);
  }
}
