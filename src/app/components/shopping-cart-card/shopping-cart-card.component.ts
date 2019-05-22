import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { OrderItem } from '../../interfaces';

@Component({
  selector: 'shopping-cart-card',
  templateUrl: './shopping-cart-card.component.html',
  styleUrls: ['./shopping-cart-card.component.sass']
})
export class ShoppingCartCardComponent {
  itemsAmount: number = 2;
  orderedPizzaItems$: Observable<OrderItem[]>;

  constructor(private store: Store<OrderItem[]>) {
    this.orderedPizzaItems$ = this.store.pipe(select('cart'));
  }
}
