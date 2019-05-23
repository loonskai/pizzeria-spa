import { createSelector } from '@ngrx/store';

import { AppState } from '../interfaces';

export const selectLoadingStatus = createSelector(
  (state: AppState) => state.pizzaList,
  pizzaList => pizzaList.loading
);
