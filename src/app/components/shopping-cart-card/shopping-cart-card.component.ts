import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { OrderItem } from '../../interfaces';
import {
  RemoveFromCart,
  IncrementCartItemAmount,
  DecrementCartItemAmount,
  ClearCart
} from 'src/app/actions/cart.actions';
import { selectTotalPrice } from '../../selectors/totalPriceSelector';

@Component({
  selector: 'shopping-cart-card',
  templateUrl: './shopping-cart-card.component.html',
  styleUrls: ['./shopping-cart-card.component.sass']
})
export class ShoppingCartCardComponent {
  cartItems$: Observable<OrderItem[]>;

  constructor(private store: Store<{ cart: OrderItem[] }>) {
    this.cartItems$ = store.pipe(select('cart'));
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
    return this.store.pipe(select(selectTotalPrice));
  }
}
