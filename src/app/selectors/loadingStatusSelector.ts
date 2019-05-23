import { createSelector } from '@ngrx/store';

import { AppState } from '../interfaces';

export const loadingStatusSelector = createSelector(
  (state: AppState) => state.pizzaList,
  pizzaList => pizzaList.loading
);
