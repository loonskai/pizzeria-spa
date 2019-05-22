import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PizzaItem } from '../../interfaces';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent implements OnInit {
  pizzaList: PizzaItem[];

  constructor(private pizzaService: PizzaService) {}

  ngOnInit() {
    this.pizzaList = this.pizzaService.getAll();
  }
}
