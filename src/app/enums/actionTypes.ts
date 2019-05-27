export enum ActionTypes {
  LoadPizzaListRequested = '[PizzaAPI] Load Pizza List Requested',
  LoadedPizzaListSuccess = '[PizzaAPI] Loaded Pizza List Success',
  LoadedPizzaListError = '[PizzaAPI] Loaded Pizza List Error',
  LoadIngredientsListRequested = '[PizzaAPI] Load Ingredients List Requested',
  LoadedIngredientsListSuccess = '[PizzaAPI] Loaded Ingredients List Success',
  LoadedIngredientsListError = '[PizzaAPI] Loaded Ingredients List Error',
  AddToCart = '[Cart] Add To Cart',
  RemoveFromCart = '[Cart] Remove From Cart',
  ClearCart = '[Cart] Clear Cart',
  IncrementCartItemAmount = '[Cart] Increment Item Cart Amount',
  DecrementCartItemAmount = '[Cart] Decrement Item Cart Amount',
  LoadIngredientListRequested = 'LoadIngredientListRequested'
}
