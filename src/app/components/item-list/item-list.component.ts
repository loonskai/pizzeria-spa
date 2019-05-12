import { Component, OnInit } from '@angular/core';

import { pizzasData } from '../../../mocks';
import { PizzaItem } from '../../interfaces';

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
