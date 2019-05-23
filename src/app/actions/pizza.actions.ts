import { Action } from '@ngrx/store';

import { ActionTypes } from '../enums';
import { OrderItem } from '../interfaces';

export class LoadPizzaList implements Action {
  readonly type = ActionTypes.LoadPizzaList;

  constructor(public payload: OrderItem[]) {}
}

export type PizzaActionsUnion = LoadPizzaList;
