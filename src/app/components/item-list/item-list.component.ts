import { Component, OnInit } from '@angular/core';

import { pizzasData } from '../../../mocks';

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

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass']
})
export class ItemListComponent implements OnInit {
  pizzasData: PizzaItem[] = pizzasData;

  constructor() {}

  ngOnInit() {}
}
