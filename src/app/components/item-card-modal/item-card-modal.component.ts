import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { ingredientsOptions } from '../../../mocks';
import { IngredientOption } from '../../interfaces';

@Component({
  selector: 'item-card-modal',
  templateUrl: './item-card-modal.component.html',
  styleUrls: ['./item-card-modal.component.sass']
})
export class ItemCardModalComponent implements OnInit {
  showCustomIngredientsList: boolean;
  customIngredientsOptions: IngredientOption[];
  @Input() defaultIngredients;
  @Input() removedIngredients;
  @Input() customIngredients;
  @Output() toggleModalEvent = new EventEmitter<string>();
  @Output() toggleDefaultIngredient = new EventEmitter<string>();
  @Output() addCustomIngredientEvent = new EventEmitter<IngredientOption>();
  @Output() removeCustomIngredientEvent = new EventEmitter<IngredientOption>();

  ngOnInit() {
    this.customIngredientsOptions = ingredientsOptions;
    this.showCustomIngredientsList = false;
  }

  closeModal() {
    this.toggleModalEvent.emit();
  }

  changeDefaultIngredientStatus(event) {
    const {
      dataset: { value }
    } = event.target;
    if (!value) return;
    this.toggleDefaultIngredient.emit(value);
  }

  isIngredientRemoved(ingredient: string) {
    return this.removedIngredients.includes(ingredient);
  }

  toggleCustomIngredientsList() {
    this.showCustomIngredientsList = !this.showCustomIngredientsList;
  }

  onCustomIngredientSelect(element: HTMLInputElement) {
    const { value } = element;
    if (value === 'Choose...') return;
    const optionSelected: IngredientOption = this.customIngredientsOptions.find(
      option => option.title === value
    );
    this.addCustomIngredientEvent.emit(optionSelected);
    if (this.customIngredients.length === 0) {
      this.showCustomIngredientsList = false;
    }
  }

  onCustomIngredientRemove(event) {
    const {
      dataset: { value }
    } = event.target;
    if (!value) return;
    const optionToGetBack: IngredientOption = this.customIngredientsOptions.find(
      option => option.title === value
    );
    this.removeCustomIngredientEvent.emit(optionToGetBack);
    if (this.customIngredients.length === 0) {
      this.showCustomIngredientsList = false;
    }
  }
}
