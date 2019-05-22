import { Action } from '@ngrx/store';

import { ActionTypes } from '../enums';
import { OrderItem } from '../interfaces';

export class AddToCart implements Action {
  readonly type = ActionTypes.AddToCart;

  constructor(public payload: OrderItem) {}
}

export class ClearCart implements Action {
  readonly type = ActionTypes.ClearCart;
}

export type ActionsUnion = AddToCart | ClearCart;
