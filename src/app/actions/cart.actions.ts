import { Action } from '@ngrx/store';

import { ActionTypes } from '../enums/actionTypes';
import { OrderItem } from '../interfaces';

export class AddToCart implements Action {
  readonly type = ActionTypes.AddToCart;

  constructor(public payload: OrderItem) {}
}

export class RemoveFromCart implements Action {
  readonly type = ActionTypes.RemoveFromCart;

  constructor(public payload: number) {}
}

export class IncrementCartItemAmount implements Action {
  readonly type = ActionTypes.IncrementCartItemAmount;

  constructor(public payload: number) {}
}

export class DecrementCartItemAmount implements Action {
  readonly type = ActionTypes.DecrementCartItemAmount;

  constructor(public payload: number) {}
}

export class ClearCart implements Action {
  readonly type = ActionTypes.ClearCart;
}

export type CartActionsUnion =
  | AddToCart
  | RemoveFromCart
  | IncrementCartItemAmount
  | DecrementCartItemAmount
  | ClearCart;
