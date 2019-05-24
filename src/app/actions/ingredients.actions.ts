import { Action } from '@ngrx/store';

import { ActionTypes } from '../enums';
import { IngredientOption } from '../interfaces';

export class LoadIngredientsListRequested implements Action {
  readonly type = ActionTypes.LoadIngredientsListRequested;
}

export class LoadedIngredientsListSuccess implements Action {
  readonly type = ActionTypes.LoadedIngredientsListSuccess;
  constructor(public payload: IngredientOption[]) {}
}

export class LoadedIngredientsListError implements Action {
  readonly type = ActionTypes.LoadedIngredientsListError;
}

export type IngredientsActionsUnion =
  | LoadIngredientsListRequested
  | LoadedIngredientsListSuccess
  | LoadedIngredientsListError;
