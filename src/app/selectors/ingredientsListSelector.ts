import { createSelector, createFeatureSelector } from '@ngrx/store';

import { IngredientOption } from '../interfaces';

const getIngredientsFeatureState = createFeatureSelector<{
  loading: boolean;
  data: IngredientOption[];
}>('ingredients');

export const ingredientsListSelector = createSelector(
  getIngredientsFeatureState,
  ingredients => ingredients.data
);
