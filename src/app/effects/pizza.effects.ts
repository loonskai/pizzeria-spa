import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  map,
  switchMap,
  catchError,
  take,
  withLatestFrom,
  filter
} from 'rxjs/operators';

import { PizzaService } from '../services/pizza.service';
import { ActionTypes } from '../enums';
import { AppState } from '../interfaces';
import { pizzaListSelector } from '../selectors/pizzaListSelector';

@Injectable()
export class PizzaEffects {
  @Effect({ dispatch: true })
  loadPizzaList$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.LoadPizzaListRequested),
    withLatestFrom(this.store.select(pizzaListSelector)),
    switchMap(([action, pizzaList]) => {
      if (pizzaList) {
        return of({
          type: ActionTypes.LoadedPizzaListSuccess,
          payload: pizzaList
        });
      } else {
        return this.pizzaService.getAll().pipe(
          map(pizzaItems => ({
            type: ActionTypes.LoadedPizzaListSuccess,
            payload: pizzaItems
          })),
          catchError(() => of({ type: ActionTypes.LoadedPizzaListError }))
        );
      }
    })
  );

  constructor(
    private actions$: Actions,
    private pizzaService: PizzaService,
    private store: Store<AppState>
  ) {}
}
