export interface PizzaItem {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  pictureUrl: string;
  energyValue: {
    fats: number;
    protein: number;
    carbohydrates: number;
    value: number;
  };
  price: number;
  size: {
    thickness: Array<{
      type: string;
      priceRate: number;
    }>;
    diameter: Array<{
      value: number;
      priceRate: number;
      persons: {
        min: number;
        max: number;
      };
    }>;
  };
}

export interface RadioGroupButtonOption {
  title: string;
  value: string | number;
}

export interface IngredientOption {
  title: string;
  price: number;
}

export interface OrderItem {
  pizzaID: number;
  amount: number;
  excludedIngredients: string[];
  customIngredients: string[];
  cheeseBoard: boolean;
  thickness: string;
  diameter: number;
  price: number;
  pizzaDetails?: PizzaItem;
}

export interface AppState {
  pizzaItems: PizzaItem[];
  cart: OrderItem[];
}
