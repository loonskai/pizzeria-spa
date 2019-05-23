import { ActionTypes } from '../enums';
import { PizzaActionsUnion } from '../actions/pizza.actions';

export const initialState = [];

export function pizzaReducer(state = initialState, action: PizzaActionsUnion) {
  switch (action.type) {
    case ActionTypes.LoadPizzaList:
      return action.payload;
    default:
      return state;
  }
}
