export interface PizzaItem {
  id: number;
  title: string;
  description: string;
  pictureUrl: string;
  energyValue: {
    fats: number;
    protein: number;
    carbohydrates: number;
    value: number;
  };
}
