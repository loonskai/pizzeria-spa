import { Component, Input, OnInit } from '@angular/core';

import { PizzaItem, RadioGroupButtonOption } from '../../interfaces';
import { ingredientsOptions } from '../../../mocks';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.component.sass']
})
export class ItemCardComponent implements OnInit {
  @Input('pizzaItem') pizza: PizzaItem;
  isModalOpen: boolean = false;
  displayCheeseBoard: boolean = false;
  withCheeseBoard: boolean = false;
  diameterOptions: RadioGroupButtonOption[];
  thicknessOptions: RadioGroupButtonOption[];
  diameterSelected: number;
  thicknessSelected: string;
  personsAmount: {
    min: number;
    max: number;
  };
  pizzaPrice: number;
  defaultIngredients: string[];
  customIngredients: string[];

  ngOnInit() {
    const { diameter, thickness } = this.pizza.size;
    this.diameterOptions = diameter.map(diameterItem => ({
      title: diameterItem.value.toString(),
      value: diameterItem.value.toString()
    }));
    this.thicknessOptions = thickness.map(thicknessItem => ({
      title: thicknessItem.type,
      value: thicknessItem.type
    }));
    this.thicknessSelected = this.thicknessOptions[0].value.toString();
    this.diameterSelected = parseInt(this.diameterOptions[0].value.toString());
    this.displayCheeseBoard = this.diameterSelected >= 30;
    this.refreshPersonsAmount(this.diameterSelected.toString());
    this.recalculatePrice();
    this.defaultIngredients = [...this.pizza.ingredients];
  }

  toggleCardModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  changeDiameter(value: string) {
    if (this.diameterSelected === +value) return;
    this.diameterSelected = parseInt(value);
    this.displayCheeseBoard = this.diameterSelected >= 30;
    this.refreshPersonsAmount(value);
    if (!this.displayCheeseBoard) {
      this.withCheeseBoard = false;
    }
    this.recalculatePrice();
  }

  changeThickness(value: string) {
    if (this.thicknessSelected === value) return;
    this.thicknessSelected = value;
    this.recalculatePrice();
  }

  toggleCheeseBoard() {
    this.withCheeseBoard = !this.withCheeseBoard;
    this.recalculatePrice();
  }

  refreshPersonsAmount(newDiameter: string) {
    const { diameter } = this.pizza.size;
    const { persons } = diameter.find(
      size => parseInt(newDiameter) === size.value
    );
    this.personsAmount = persons;
  }

  recalculatePrice() {
    let recalculatedPrice = this.pizza.price;
    if (this.withCheeseBoard) {
      recalculatedPrice *= 1.15;
    }
    const { diameter, thickness } = this.pizza.size;
    const { priceRate: thicknessPriceRate } = thickness.find(
      item => this.thicknessSelected === item.type
    );
    const { priceRate: diameterPriceRate } = diameter.find(
      item => this.diameterSelected === item.value
    );
    recalculatedPrice *= thicknessPriceRate * diameterPriceRate;
    this.pizzaPrice = parseFloat(recalculatedPrice.toFixed(1));
  }

  toggleDefaultIngredient(ingredient: string) {
    const updatedIngredients = this.defaultIngredients.filter(
      existingIngredient => existingIngredient !== ingredient
    );
    if (updatedIngredients.length === this.defaultIngredients.length) {
      updatedIngredients.push(ingredient);
    }
    this.defaultIngredients = updatedIngredients;
  }

  addCustomIngredient(ingredientTitle: string) {
    const ingredient = ingredientsOptions.find(
      ingredientOption => ingredientOption.title === ingredientTitle
    );
    this.customIngredients.push(ingredient.title);
    console.log(ingredient);
  }
}
