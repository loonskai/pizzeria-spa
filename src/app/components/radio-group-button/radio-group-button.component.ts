import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { RadioGroupButtonOption } from '../../interfaces';

@Component({
  selector: 'radio-group-button',
  templateUrl: './radio-group-button.component.html',
  styleUrls: ['./radio-group-button.component.sass']
})
export class RadioGroupButtonComponent implements OnInit {
  @Input() options: RadioGroupButtonOption;
  @Input('value') itemSelected: string;
  @Output() changeEvent = new EventEmitter<string>();

  selectItem(event: Event) {
    const { type: inputType, value: inputValue } = <HTMLInputElement>(
      event.target
    );
    if (inputType !== 'radio' || inputValue === this.itemSelected) return;
    this.changeEvent.emit(inputValue);
  }

  checkItemSelected(value: string) {
    return value === this.itemSelected;
  }

  ngOnInit() {
    this.itemSelected = this.options[0].value;
  }
}
