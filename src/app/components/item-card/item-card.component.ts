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
    this.diameterSelected = this.diameterOptions[0].value;
  }

  toggleCardModal() {
    console.log(this.thicknessSelected);
    console.log(this.diameterSelected);
    this.isModalOpen = !this.isModalOpen;
  }

  changeDiameter(value: string) {
    this.diameterSelected = +value;
  }

  changeThickness(value: string) {
    console.log(value);
    this.thicknessSelected = value;
  }
}
