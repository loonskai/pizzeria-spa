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
  diameterOptions: RadioGroupButtonOption;
  thicknessOptions: RadioGroupButtonOption;

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
  }

  toggleCardModal() {
    this.isModalOpen = !this.isModalOpen;
  }
}
