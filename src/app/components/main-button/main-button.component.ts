import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.sass']
})
export class MainButtonComponent implements OnInit {
  isDisabled: boolean = false;
  @Input() text: string;

  ngOnInit() {}
}
