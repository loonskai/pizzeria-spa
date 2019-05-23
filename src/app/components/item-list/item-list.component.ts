import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState, PizzaItem } from '../../interfaces';
import { LoadPizzaListRequested } from '../../actions/pizza.actions';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent implements OnInit {
  itemList$: Observable<PizzaItem[]>;

  constructor(private store: Store<AppState>) {
    this.itemList$ = this.store.select('pizzaItems');
  }

  ngOnInit() {
    this.store.dispatch(new LoadPizzaListRequested());
  }

  ngrxOnInitEffects() {
    return { type: new LoadPizzaListRequested() };
  }
}
