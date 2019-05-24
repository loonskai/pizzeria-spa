import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { PizzaService } from './services/pizza.service';

@Injectable()
export class PizzaResolver implements Resolve<Observable<string>> {
  constructor(private pizzaService: PizzaService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.pizzaService.getOneById(route.paramMap.get('id'));
  }
}
