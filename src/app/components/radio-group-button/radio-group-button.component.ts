import { Component, OnInit, Input } from '@angular/core';

import { RadioGroupButtonOption } from '../../interfaces';

@Component({
  selector: 'radio-group-button',
  templateUrl: './radio-group-button.component.html',
  styleUrls: ['./radio-group-button.component.sass']
})
export class RadioGroupButtonComponent implements OnInit {
  @Input() options: RadioGroupButtonOption;
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
