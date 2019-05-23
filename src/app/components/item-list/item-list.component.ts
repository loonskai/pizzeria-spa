import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AppState, PizzaItem } from '../../interfaces';
import { LoadPizzaList } from '../../actions/pizza.actions';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent implements OnInit {
  itemList$: Observable<PizzaItem[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadPizzaList());
    this.itemList$ = this.store.pipe(select('pizzaItems'));
  }
}
