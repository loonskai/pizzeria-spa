export enum RegExpValues {
  phone = '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$',
  number = '[0-9]*'
}

export enum ApiPaths {
  pizzaList = 'http://localhost:4203/pizza',
  ingredientsList = 'http://localhost:4203/ingredients'
}
