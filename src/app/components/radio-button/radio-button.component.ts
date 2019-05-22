import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioButtonComponent {
  @Input() isSelected;
}
