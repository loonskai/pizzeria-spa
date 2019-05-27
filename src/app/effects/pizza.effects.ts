import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';

import { PizzaService } from '../services/pizza.service';
import { ActionTypes } from '../enums/actionTypes';
import { AppState } from '../interfaces';
import { pizzaListSelector } from '../selectors/pizzaListSelector';
import { ingredientsListSelector } from '../selectors/ingredientsListSelector';

@Injectable()
export class PizzaEffects {
  @Effect({ dispatch: true })
  loadPizzaList$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.LoadPizzaListRequested),
    withLatestFrom(this.store.select(pizzaListSelector)),
    switchMap(([action, pizzaList]) => {
      if (pizzaList)
        return of({
          type: ActionTypes.LoadedPizzaListSuccess,
          payload: pizzaList
        });
      return this.pizzaService.getAll().pipe(
        map(pizzaItems => ({
          type: ActionTypes.LoadedPizzaListSuccess,
          payload: pizzaItems
        })),
        catchError(() => of({ type: ActionTypes.LoadedPizzaListError }))
      );
    })
  );

  @Effect({ dispatch: true })
  loadIngredientsList$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.LoadIngredientsListRequested),
    withLatestFrom(this.store.select(ingredientsListSelector)),
    switchMap(([action, ingredients]) => {
      if (ingredients)
        return of({
          type: ActionTypes.LoadedIngredientsListSuccess,
          payload: ingredients
        });
      return this.pizzaService.getAllIngredients().pipe(
        map(ingredients => ({
          type: ActionTypes.LoadedIngredientsListSuccess,
          payload: ingredients
        })),
        catchError(() => of({ type: ActionTypes.LoadedIngredientsListError }))
      );
    })
  );

  constructor(
    private actions$: Actions,
    private pizzaService: PizzaService,
    private store: Store<AppState>
  ) {}
}
