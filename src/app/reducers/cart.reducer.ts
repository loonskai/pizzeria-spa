import { Action } from '@ngrx/store';

import { ActionTypes } from '../enums';
import { AddToCart } from '../actions/cart.actions';

export const initialState = [];

export function cartReducer(state = initialState, action: AddToCart) {
  switch (action.type) {
    case ActionTypes.AddToCart:
      return [...state, action.payload];
  }
}
