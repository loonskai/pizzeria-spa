import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/services/pizza.service';
import { PizzaItem, RadioGroupButtonOption } from 'src/app/interfaces';

@Component({
  selector: 'app-pizza-page',
  templateUrl: './pizza-page.component.html',
  styleUrls: ['./pizza-page.component.sass']
})
export class PizzaPageComponent implements OnInit {
  pizzaItem: PizzaItem;
  diameterOptions: RadioGroupButtonOption[];
  thicknessOptions: RadioGroupButtonOption[];
  diameterSelected: number;
  thicknessSelected: string;
  displayCheeseBoard: boolean;
  withCheeseBoard: boolean;

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService
  ) {
    this.displayCheeseBoard = false;
  }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.pizzaItem = this.pizzaService.getOneById(id);
    const { diameter, thickness } = this.pizzaItem.size;
    this.diameterOptions = diameter.map(diameterItem => ({
      title: diameterItem.value.toString(),
      value: diameterItem.value.toString()
    }));
    this.thicknessOptions = thickness.map(thicknessItem => ({
      title: thicknessItem.type,
      value: thicknessItem.type
    }));
    this.thicknessSelected = this.thicknessOptions[0].value.toString();
    this.diameterSelected = parseInt(this.diameterOptions[0].value.toString());
    this.displayCheeseBoard = this.diameterSelected >= 30;
  }

  changeDiameter(value: string) {
    if (this.diameterSelected === +value) return;
    this.diameterSelected = parseInt(value);
    this.displayCheeseBoard = this.diameterSelected >= 30;
    if (!this.displayCheeseBoard) {
      this.withCheeseBoard = false;
    }
    /* this.recalculatePrice(); */
  }

  changeThickness(value: string) {
    if (this.thicknessSelected === value) return;
    this.thicknessSelected = value;
    // this.recalculatePrice();
  }

  toggleCheeseBoard() {
    this.withCheeseBoard = !this.withCheeseBoard;
    // this.recalculatePrice();
  }
}
