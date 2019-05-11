import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.sass']
})
export class AddButtonComponent implements OnInit {
  isDisabled: boolean = true;

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 1000);
  }

  ngOnInit() {}
}
