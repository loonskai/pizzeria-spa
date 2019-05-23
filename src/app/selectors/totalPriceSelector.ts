import { createSelector } from '@ngrx/store';

import { OrderItem } from '../interfaces';

export const selectTotalPrice = createSelector(
  (state: { cart: OrderItem[] }) => state.cart,
  cart => cart.reduce((acc, item) => acc + item.price, 0)
);
