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
  diameterOptions: RadioGroupButtonOption;
  thicknessOptions: RadioGroupButtonOption;
  diameterSelected: number;
  thicknessSelected: string;

  ngOnInit() {
    const { diameter, thickness } = this.pizza.size;
    this.diameterOptions = diameter.map(diameterItem => ({
      title: diameterItem.value,
      value: diameterItem.value.toString()
    }));
    this.thicknessOptions = thickness.map(thicknessItem => ({
      title: thicknessItem.type,
      value: thicknessItem.type
    }));
    this.thicknessSelected = this.thicknessOptions[0].value;
    this.diameterSelected = this.diameterOptions[2].value;
    this.displayCheeseBoard = this.diameterSelected >= 30;
  }

  toggleCardModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  changeDiameter(value: string) {
    if (this.diameterSelected === +value) return;
    this.diameterSelected = +value;
    this.displayCheeseBoard = this.diameterSelected >= 30;
  }

  changeThickness(value: string) {
    if (this.thicknessSelected === value) return;
    this.thicknessSelected = value;
  }

  toggleCheeseBoardSelected() {
    this.withCheeseBoard = !this.withCheeseBoard;
  }
}
