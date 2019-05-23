import { ActionTypes } from '../enums';
import { PizzaActionsUnion } from '../actions/pizza.actions';

export const initialState = {
  loading: false,
  data: []
};

export function pizzaReducer(state = initialState, action: PizzaActionsUnion) {
  switch (action.type) {
    case ActionTypes.LoadPizzaListRequested:
      return { ...state, loading: true };
    case ActionTypes.LoadedPizzaListSuccess:
      return { data: action.payload, loading: false };
    case ActionTypes.LoadedPizzaListError:
      return { ...state, loading: false };
    default:
      return state;
  }
}
