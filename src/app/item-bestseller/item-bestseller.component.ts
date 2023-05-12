import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-bestseller',
  templateUrl: './item-bestseller.component.html',
  styleUrls: ['./item-bestseller.component.css']
})
export class ItemBestsellerComponent {
  // @Input() imgurl = '';
  @Input() name = '';
  @Input() p1 = '';
}
