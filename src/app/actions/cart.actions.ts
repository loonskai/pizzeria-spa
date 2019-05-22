import { Action } from '@ngrx/store';

import { ActionTypes } from '../enums';

export class AddToCart implements Action {
  readonly type = ActionTypes.AddToCart;

  constructor(public payload: any) {}
}
