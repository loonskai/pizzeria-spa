import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PizzaItem, IngredientOption } from '../interfaces';
import { ApiPaths } from '../enums';
// import { pizzaData, ingredientsOptions } from '../../mocks';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    // return pizzaData;
    return this.http.get(ApiPaths.pizzaList);
  }

  getOneById(id: number): PizzaItem {
    // return pizzaData.find(item => item.id === id);
    return;
  }

  getAllIngredients(): IngredientOption[] {
    // return ingredientsOptions;
    return [];
  }
}
