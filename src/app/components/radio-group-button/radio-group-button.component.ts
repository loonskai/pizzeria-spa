import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'radio-group-button',
  templateUrl: './radio-group-button.component.html',
  styleUrls: ['./radio-group-button.component.sass']
})
export class RadioGroupButtonComponent implements OnInit {
  itemSelected: string = 'first';

  selectItem(event: Event) {
    const { type: inputType, value: inputValue } = <HTMLInputElement>(
      event.target
    );
    if (inputType !== 'radio' || inputValue === this.itemSelected) return;
    this.itemSelected = inputValue;
  }

  checkItemSelected(value: string) {
    return value === this.itemSelected;
  }

  ngOnInit() {}
}
