import { createSelector, createFeatureSelector } from '@ngrx/store';

import { PizzaItem } from '../interfaces';

const getPizzaFeatureState = createFeatureSelector<{
  loading: boolean;
  data: PizzaItem[];
}>('pizzaList');

export const pizzaListSelector = createSelector(
  getPizzaFeatureState,
  pizzaList => pizzaList.data
);
