import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, EMPTY, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { PizzaService } from '../services/pizza.service';
import { ActionTypes } from '../enums';

@Injectable()
export class PizzaEffects {
  @Effect({ dispatch: true })
  loadPizzaList$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.LoadPizzaListRequested),
    switchMap(() =>
      this.pizzaService.getAll().pipe(
        map(pizzaItems => ({
          type: ActionTypes.LoadedPizzaListSuccess,
          payload: pizzaItems
        })),
        catchError(() => of({ type: ActionTypes.LoadedPizzaListError }))
      )
    )
  );

  constructor(private actions$: Actions, private pizzaService: PizzaService) {}
}
