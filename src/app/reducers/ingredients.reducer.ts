import { ActionTypes } from '../enums/actionTypes';
import { IngredientsActionsUnion } from '../actions/ingredients.actions';

export const initialState = {
  loading: false,
  data: null
};

export function ingredientsReducer(
  state = initialState,
  action: IngredientsActionsUnion
) {
  switch (action.type) {
    case ActionTypes.LoadIngredientsListRequested:
      return { ...state, loading: true };
    case ActionTypes.LoadedIngredientsListSuccess:
      return { data: action.payload, loading: false };
    case ActionTypes.LoadedIngredientsListError:
      return { ...state, loading: false };
    default:
      return state;
  }
}
