import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'item-card-modal',
  templateUrl: './item-card-modal.component.html',
  styleUrls: ['./item-card-modal.component.sass']
})
export class ItemCardModalComponent implements OnInit {
  @Input() ingredients;
  @Output() toggle = new EventEmitter<string>();

  closeModal() {
    this.toggle.emit();
  }

  ngOnInit() {}
}
