import { ActionTypes } from '../enums';
import { CartActionsUnion } from '../actions/cart.actions';

export const initialState = [];

export function cartReducer(state = initialState, action: CartActionsUnion) {
  switch (action.type) {
    case ActionTypes.AddToCart:
      return [...state, action.payload];
    case ActionTypes.RemoveFromCart:
      return state.filter((item, idx) => idx !== action.payload);
    case ActionTypes.IncrementCartItemAmount:
      return state.map((item, idx) =>
        idx === action.payload
          ? {
              ...item,
              amount: item.amount + 1,
              price: parseFloat(
                (item.price + item.price / item.amount).toFixed(2)
              )
            }
          : item
      );
    case ActionTypes.DecrementCartItemAmount:
      return state.map((item, idx) =>
        idx === action.payload
          ? {
              ...item,
              amount: item.amount - 1,
              price: parseFloat(
                (item.price - item.price / item.amount).toFixed(2)
              )
            }
          : item
      );
    case ActionTypes.ClearCart:
      return [];
    default:
      return state;
  }
}
