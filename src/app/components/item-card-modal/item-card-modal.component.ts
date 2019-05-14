import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { ingredientsOptions } from '../../../mocks';

@Component({
  selector: 'item-card-modal',
  templateUrl: './item-card-modal.component.html',
  styleUrls: ['./item-card-modal.component.sass']
})
export class ItemCardModalComponent implements OnInit {
  showIngredientSelect: boolean = false;
  ingredientsOptions: string[];
  @Input('ingredients') defaultIngredients;
  @Input() customIngredients;
  @Output() toggle = new EventEmitter<string>();
  @Output() toggleIngredient = new EventEmitter<string>();

  closeModal() {
    this.toggle.emit();
  }

  changeIngredientStatus(event) {
    const {
      dataset: { value }
    } = event.target;
    if (!value) return;
    this.toggleIngredient.emit(value);
  }

  isIngredientIncluded(ingredient: string) {
    return this.customIngredients.includes(ingredient);
  }

  toggleIngredientSelect() {
    this.showIngredientSelect = !this.showIngredientSelect;
  }

  ngOnInit() {
    this.ingredientsOptions = ingredientsOptions.filter(
      ingredient => !this.defaultIngredients.includes(ingredient)
    );
  }
}
