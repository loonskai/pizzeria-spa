import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { ingredientsOptions } from '../../../mocks';

@Component({
  selector: 'item-card-modal',
  templateUrl: './item-card-modal.component.html',
  styleUrls: ['./item-card-modal.component.sass']
})
export class ItemCardModalComponent implements OnInit {
  showIngredientSelect: boolean = false;
  ingredientsOptions: any;
  @Input() initialDefaultIngredients;
  @Input() defaultIngredients;
  @Input() customIngredients;
  @Output() toggle = new EventEmitter<string>();
  @Output() toggleDefaultIngredient = new EventEmitter<string>();
  @Output() addCustomIngredient = new EventEmitter<string>();

  closeModal() {
    this.toggle.emit();
  }

  changeDefaultIngredientStatus(event) {
    const {
      dataset: { value }
    } = event.target;
    if (!value) return;
    this.toggleDefaultIngredient.emit(value);
  }

  isIngredientIncluded(ingredient: string) {
    return this.defaultIngredients.includes(ingredient);
  }

  toggleIngredientSelect() {
    this.showIngredientSelect = !this.showIngredientSelect;
  }

  onIngredientSelect(element: HTMLInputElement) {
    const { value } = element;
    this.addCustomIngredient.emit(value);
    this.ingredientsOptions = this.ingredientsOptions.filter(
      ingredientsOption => ingredientsOption.title !== value
    );
  }

  ngOnInit() {
    this.ingredientsOptions = ingredientsOptions.filter(
      ingredient => !this.defaultIngredients.includes(ingredient.title)
    );
  }
}
