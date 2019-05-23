import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { OrderItem, AppState } from '../../interfaces';
import {
  RemoveFromCart,
  IncrementCartItemAmount,
  DecrementCartItemAmount,
  ClearCart
} from 'src/app/actions/cart.actions';
import { selectTotalPrice } from '../../selectors/totalPriceSelector';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.sass']
})
export class CheckoutPageComponent {
  cartItems$: Observable<OrderItem[]>;

  constructor(private store: Store<AppState>) {
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
