import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.sass']
})
export class RadioButtonComponent implements OnInit {
  @Input() isSelected;

  constructor() {}

  ngOnInit() {}
}
