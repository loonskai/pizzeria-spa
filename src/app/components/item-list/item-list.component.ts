import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AppState, PizzaItem } from '../../interfaces';
import { LoadPizzaListRequested } from '../../actions/pizza.actions';
import { LoadIngredientsListRequested } from '../../actions/ingredients.actions';
import { loadingStatusSelector } from '../../selectors/pizzaListSelector';
import { pizzaListSelector } from '../../selectors/pizzaListSelector';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent implements OnInit {
  itemList$: Observable<PizzaItem[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadPizzaListRequested());
    this.loading$ = this.store.pipe(select(loadingStatusSelector));
    this.itemList$ = this.store.pipe(select(pizzaListSelector));
    this.store.dispatch(new LoadIngredientsListRequested());
  }
}
