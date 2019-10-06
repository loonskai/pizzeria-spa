import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AddToCart } from '../../actions/cart.actions';
import { OrderItem, AppState } from '../../interfaces';

import {
  PizzaItem,
  RadioGroupButtonOption,
  IngredientOption
} from '../../interfaces';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.component.sass']
})
export class ItemCardComponent implements OnInit {
  @Input() pizzaItem: PizzaItem;
  isModalOpen = false;
  displayCheeseBoard = false;
  withCheeseBoard = false;
  diameterOptions: RadioGroupButtonOption[];
  thicknessOptions: RadioGroupButtonOption[];
  diameterSelected: number;
  thicknessSelected: string;
  defaultIngredients: string[];
  removedIngredients: string[] = [];
  customIngredients: string[] = [];

  private customIngredientsPrice = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    const { diameter, thickness } = this.pizzaItem.size;
    this.diameterOptions = diameter.map(diameterItem => ({
      title: diameterItem.value.toString(),
      value: diameterItem.value.toString()
    }));
    this.thicknessOptions = thickness.map(thicknessItem => ({
      title: thicknessItem.type,
      value: thicknessItem.type
    }));
    this.thicknessSelected = this.thicknessOptions[0].value.toString();
    this.diameterSelected = +this.diameterOptions[0].value.toString();
    this.displayCheeseBoard = this.diameterSelected >= 30;
    this.defaultIngredients = [...this.pizzaItem.ingredients];
  }

  toggleCardModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  changeDiameter(value: string) {
    if (this.diameterSelected === +value) {
      return;
    }
    this.diameterSelected = +value;
    this.displayCheeseBoard = this.diameterSelected >= 30;
    if (!this.displayCheeseBoard) {
      this.withCheeseBoard = false;
    }
  }

  changeThickness(value: string) {
    if (this.thicknessSelected === value) {
      return;
    }
    this.thicknessSelected = value;
  }

  toggleCheeseBoard() {
    this.withCheeseBoard = !this.withCheeseBoard;
  }

  toggleDefaultIngredient(ingredient: string) {
    if (this.removedIngredients.includes(ingredient)) {
      this.removedIngredients = this.removedIngredients.filter(
        removedIngredient => removedIngredient !== ingredient
      );
    } else {
      this.removedIngredients.push(ingredient);
    }
  }

  addCustomIngredient(ingredientOption: IngredientOption) {
    const { title, price } = ingredientOption;
    this.customIngredients.push(title);
    this.customIngredientsPrice += price;
  }

  removeCustomIngredient(ingredientOption: IngredientOption) {
    const { title, price } = ingredientOption;
    this.customIngredients = this.customIngredients.filter(
      customIngredientTitle => customIngredientTitle !== title
    );
    this.customIngredientsPrice -= price;
  }

  addToCart() {
    const pizzaItem = {
      pizzaID: this.pizzaItem.id,
      amount: 1,
      excludedIngredients: [...this.removedIngredients],
      customIngredients: [...this.customIngredients],
      cheeseBoard: this.withCheeseBoard,
      thickness: this.thicknessSelected,
      diameter: this.diameterSelected,
      price: parseFloat(this.pizzaPrice),
      pizzaDetails: this.pizzaItem
    };
    this.store.dispatch(new AddToCart(pizzaItem));
  }

  get pizzaPrice() {
    let recalculatedPrice = this.pizzaItem.price;
    if (this.withCheeseBoard) {
      recalculatedPrice *= 1.15;
    }
    const { diameter, thickness } = this.pizzaItem.size;
    const { priceRate: thicknessPriceRate } = thickness.find(
      item => this.thicknessSelected === item.type
    );
    const { priceRate: diameterPriceRate } = diameter.find(
      item => this.diameterSelected === item.value
    );
    recalculatedPrice *= thicknessPriceRate * diameterPriceRate;
    recalculatedPrice += this.customIngredientsPrice;
    return recalculatedPrice.toFixed(1);
  }

  get personsAmount() {
    const { diameter } = this.pizzaItem.size;
    const { persons } = diameter.find(
      size => this.diameterSelected === size.value
    );
    return persons;
  }
}
