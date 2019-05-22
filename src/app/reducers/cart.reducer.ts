import { Action } from '@ngrx/store';

import { ActionTypes } from '../enums';
import { ActionsUnion } from '../actions/cart.actions';

export const initialState = [];

export function cartReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.AddToCart:
      return [...state, action.payload];
    case ActionTypes.ClearCart:
      return [];
    default:
      return state;
  }
}
