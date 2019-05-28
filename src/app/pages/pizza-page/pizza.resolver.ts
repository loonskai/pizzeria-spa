import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState, PizzaItem } from 'src/app/interfaces';
import { pizzaItemSelector } from 'src/app/selectors/pizzaListSelector';

@Injectable()
export class PizzaResolver implements Resolve<Observable<any>> {
  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot): Observable<PizzaItem> {
    return this.store.select(pizzaItemSelector, {
      id: +route.paramMap.get('id')
    });
  }
}
