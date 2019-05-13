import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'item-card-modal',
  templateUrl: './item-card-modal.component.html',
  styleUrls: ['./item-card-modal.component.sass']
})
export class ItemCardModalComponent implements OnInit {
  @Output() toggle = new EventEmitter<string>();

  closeModal() {
    this.toggle.emit();
  }

  ngOnInit() {}
}
