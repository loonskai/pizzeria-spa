export enum RegExpValues {
  phone = '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$',
  number = '[0-9]*'
}

export enum ActionTypes {
  LoadPizzaList = '[Pizza] Load Pizza List',
  AddToCart = '[Cart] Add To Cart',
  RemoveFromCart = '[Cart] Remove From Cart',
  ClearCart = '[Cart] Clear Cart',
  IncrementCartItemAmount = '[Cart] Increment Item Cart Amount',
  DecrementCartItemAmount = '[Cart] Decrement Item Cart Amount'
}

export enum ApiPaths {
  pizzaList = 'https://demo4660452.mockable.io/pizza',
  ingredientsList = 'https://demo4660452.mockable.io/ingredients'
}
