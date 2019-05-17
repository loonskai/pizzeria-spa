import { Injectable } from '@angular/core';

import { PizzaItem } from '../interfaces';
import { pizzaData } from '../../mocks';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  constructor() {}

  getAll(): PizzaItem[] {
    return pizzaData;
  }

  getOneById(id: number): PizzaItem {
    return pizzaData.find(item => item.id === id);
  }
}
