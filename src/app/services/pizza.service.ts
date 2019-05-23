import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PizzaItem, IngredientOption } from '../interfaces';
import { ApiPaths } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(ApiPaths.pizzaList);
  }

  getOneById(id: number): PizzaItem {
    // return pizzaData.find(item => item.id === id);
    return;
  }

  getAllIngredients(): Observable<any> {
    return this.http.get(ApiPaths.ingredientsList);
  }
}
