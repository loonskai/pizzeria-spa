import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AppState, PizzaItem } from '../../interfaces';
import { LoadPizzaListRequested } from '../../actions/pizza.actions';
import { selectLoadingStatus } from '../../selectors/selectLoadingStatus';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent implements OnInit {
  itemList$: Observable<PizzaItem[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    // this.itemList$ = this.store.select('pizzaItems');
  }

  ngOnInit() {
    this.store.dispatch(new LoadPizzaListRequested());
    this.loading$ = this.store.pipe(select(selectLoadingStatus));
  }

  ngrxOnInitEffects() {
    return { type: new LoadPizzaListRequested() };
  }
}
