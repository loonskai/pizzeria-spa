import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { IngredientOption, AppState } from '../../interfaces';
import { ingredientsListSelector } from 'src/app/selectors/ingredientsListSelector';

@Component({
  selector: 'item-card-modal',
  templateUrl: './item-card-modal.component.html',
  styleUrls: ['./item-card-modal.component.sass']
})
export class ItemCardModalComponent implements OnInit {
  private subscription: Subscription = new Subscription();

  showCustomIngredientsList: boolean;
  customIngredientsOptions: IngredientOption[];

  @Input() defaultIngredients;
  @Input() removedIngredients;
  @Input() customIngredients;
  @Output() toggleModalEvent = new EventEmitter<string>();
  @Output() toggleDefaultIngredient = new EventEmitter<string>();
  @Output() addCustomIngredientEvent = new EventEmitter<IngredientOption>();
  @Output() removeCustomIngredientEvent = new EventEmitter<IngredientOption>();
  @Output() addToCartEvent: EventEmitter<any> = new EventEmitter();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.subscription.add(
      this.store
        .pipe(select(ingredientsListSelector))
        .subscribe(ingredients => {
          this.customIngredientsOptions = ingredients;
        })
    );
    this.showCustomIngredientsList = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  closeModal() {
    this.toggleModalEvent.emit();
  }

  addToCart() {
    this.addToCartEvent.emit();
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
