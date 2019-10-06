import {
  Component,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { RadioGroupButtonOption } from '../../interfaces';

@Component({
  selector: 'app-radio-group-button',
  templateUrl: './radio-group-button.component.html',
  styleUrls: ['./radio-group-button.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioGroupButtonComponent {
  @Input() options: RadioGroupButtonOption;
  @Input() value: string;
  @Output() changeEvent = new EventEmitter<string>();

  selectItem(event: Event) {
    const {
      type: inputType,
      value: inputValue
    } = event.target as HTMLInputElement;
    if (inputType !== 'radio' || inputValue === this.value) {
      return;
    }
    this.changeEvent.emit(inputValue);
  }

  checkItemSelected(value: string) {
    return value === this.value;
  }
}
