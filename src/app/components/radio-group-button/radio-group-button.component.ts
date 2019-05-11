import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'radio-group-button',
  templateUrl: './radio-group-button.component.html',
  styleUrls: ['./radio-group-button.component.sass']
})
export class RadioGroupButtonComponent implements OnInit {
  itemSelected: string = 'first';

  constructor() {}

  selectItem(event: Event) {
    const inputClicked = <HTMLInputElement>event.target;
    this.itemSelected = inputClicked.value;
    console.log(this.itemSelected);
  }

  ngOnInit() {}
}
