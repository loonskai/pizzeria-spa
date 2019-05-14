import { Component, Input, OnInit } from '@angular/core';

import { PizzaItem, RadioGroupButtonOption } from '../../interfaces';

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
  diameterSelected: string | number;
  thicknessSelected: string;
  personsAmount: {
    min: number;
    max: number;
  };

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
    this.diameterSelected = this.diameterOptions[2].value;
    this.displayCheeseBoard = this.diameterSelected >= 30;
    const { persons } = diameter.find(
      size => this.diameterSelected === size.value.toString()
    );
    this.personsAmount = persons;
  }

  toggleCardModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  changeDiameter(value: string) {
    if (this.diameterSelected === +value) return;
    this.diameterSelected = +value;
    this.displayCheeseBoard = this.diameterSelected >= 30;
    const { diameter } = this.pizza.size;
    const { persons } = diameter.find(size => value === size.value.toString());
    this.personsAmount = persons;
    if (!this.displayCheeseBoard) {
      this.withCheeseBoard = false;
    }
  }

  changeThickness(value: string) {
    if (this.thicknessSelected === value) return;
    this.thicknessSelected = value;
  }

  toggleCheeseBoard() {
    this.withCheeseBoard = !this.withCheeseBoard;
  }
}
