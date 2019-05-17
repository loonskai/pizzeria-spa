import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/services/pizza.service';
import { PizzaItem } from 'src/app/interfaces';

@Component({
  selector: 'app-pizza-page',
  templateUrl: './pizza-page.component.html',
  styleUrls: ['./pizza-page.component.sass']
})
export class PizzaPageComponent implements OnInit {
  pizzaItem: PizzaItem;
  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.pizzaItem = this.pizzaService.getOneById(id);
  }
}
