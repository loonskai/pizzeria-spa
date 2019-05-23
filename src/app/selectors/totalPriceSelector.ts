import { createSelector } from '@ngrx/store';

import { AppState } from '../interfaces';

export const selectTotalPrice = createSelector(
  (state: AppState) => state.cart,
  cart => cart.reduce((acc, item) => acc + item.price, 0)
);
