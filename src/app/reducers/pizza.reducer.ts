import { ActionTypes } from '../enums';
import { PizzaActionsUnion } from '../actions/pizza.actions';

export const initialState = [];

export function pizzaReducer(state = initialState, action: PizzaActionsUnion) {
  switch (action.type) {
    case ActionTypes.LoadPizzaList:
      return state;
    case ActionTypes.LoadedPizzaListSuccess:
      return action.payload;
    case ActionTypes.LoadedPizzaListError:
      return state;
    default:
      return state;
  }
}
