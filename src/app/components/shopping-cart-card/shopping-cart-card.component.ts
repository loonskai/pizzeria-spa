import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { OrderItem } from '../../interfaces';
import { ClearCart } from 'src/app/actions/cart.actions';

@Component({
  selector: 'shopping-cart-card',
  templateUrl: './shopping-cart-card.component.html',
  styleUrls: ['./shopping-cart-card.component.sass']
})
export class ShoppingCartCardComponent {
  orderedPizzaItems$: Observable<OrderItem[]>;

  constructor(private store: Store<OrderItem[]>) {
    this.orderedPizzaItems$ = this.store.pipe(select('cart'));
  }

  clearCart() {
    this.store.dispatch(new ClearCart());
  }
}
