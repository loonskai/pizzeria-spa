import { Component } from '@angular/core';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.component.sass']
})
export class ItemCardComponent {
  itemName: string = 'Pizza';
  itemDescription: string = 'The tastiest pizza ever';
}
