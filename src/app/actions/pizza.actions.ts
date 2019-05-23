import { Action } from '@ngrx/store';

import { ActionTypes } from '../enums';
import { OrderItem } from '../interfaces';

export class LoadPizzaList implements Action {
  readonly type = ActionTypes.LoadPizzaList;
}

export class LoadedPizzaListSuccess implements Action {
  readonly type = ActionTypes.LoadedPizzaListSuccess;
  constructor(public payload: OrderItem[]) {}
}

export class LoadedPizzaListError implements Action {
  readonly type = ActionTypes.LoadedPizzaListError;
}

export type PizzaActionsUnion =
  | LoadPizzaList
  | LoadedPizzaListSuccess
  | LoadedPizzaListError;
