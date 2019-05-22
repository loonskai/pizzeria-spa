import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { OrderItem } from '../../interfaces';
import {
  RemoveFromCart,
  IncrementCartItemAmount,
  DecrementCartItemAmount,
  ClearCart
} from 'src/app/actions/cart.actions';

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

  removeFromCart(index: number) {
    this.store.dispatch(new RemoveFromCart(index));
  }

  incrementAmount(index: number) {
    this.store.dispatch(new IncrementCartItemAmount(index));
  }

  decrementAmount(index: number) {
    this.store.dispatch(new DecrementCartItemAmount(index));
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
