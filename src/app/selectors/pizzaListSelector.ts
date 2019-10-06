import { createSelector, createFeatureSelector } from '@ngrx/store';

import { AppState, PizzaItem } from '../interfaces';

const getPizzaFeatureState = createFeatureSelector<{
  loading: boolean;
  data: PizzaItem[];
}>('pizzaList');

export const pizzaListSelector = createSelector(
  getPizzaFeatureState,
  pizzaList => pizzaList.data
);

export const pizzaItemSelector = createSelector(
  getPizzaFeatureState,
  (pizzaList, props) => {
    const result = pizzaList.data.find(item => item.id === props.id);
    return result;
  }
);

export const loadingStatusSelector = createSelector(
  (state: AppState) => state.pizzaList,
  pizzaList => pizzaList.loading
);
