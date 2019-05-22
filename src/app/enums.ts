export enum RegExpValues {
  phone = '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$',
  number = '[0-9]*'
}

export enum ActionTypes {
  AddToCart = '[Cart] Add To Cart',
  RemoverFromCart = '[Cart] Remove From Cart',
  ClearCart = '[Cart] Clear Cart',
  IncrementCartItemAmount = '[Cart] Increment Item Cart Amount',
  DecrementCartItemAmount = '[Cart] Decrement Item Cart Amount'
}
