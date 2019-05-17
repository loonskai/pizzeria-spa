import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.sass']
})
export class MainButtonComponent implements OnInit {
  isDisabled: boolean = false;
  @Input() text: string;
  @Input() link?: string;

  constructor(private router: Router) {}

  onClick() {
    if (this.link) {
      console.log(this.link);
      this.router.navigate([this.link]);
    }
  }

  ngOnInit() {}
}
