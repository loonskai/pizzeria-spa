import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './interfaces';
import { LoadPizzaListRequested } from './actions/pizza.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'pizzeria-spa';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadPizzaListRequested());
  }
}
