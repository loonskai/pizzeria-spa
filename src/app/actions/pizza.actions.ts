import { Action } from '@ngrx/store';

import { ActionTypes } from '../enums';
import { OrderItem } from '../interfaces';

export class LoadPizzaListRequested implements Action {
  readonly type = ActionTypes.LoadPizzaListRequested;
}

export class LoadedPizzaListSuccess implements Action {
  readonly type = ActionTypes.LoadedPizzaListSuccess;
  constructor(public payload: OrderItem[]) {}
}

export class LoadedPizzaListError implements Action {
  readonly type = ActionTypes.LoadedPizzaListError;
}

export type PizzaActionsUnion =
  | LoadPizzaListRequested
  | LoadedPizzaListSuccess
  | LoadedPizzaListError;
