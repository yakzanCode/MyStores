import { Component, Input } from '@angular/core';
import { Shoes } from '../Models/class';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
 @Input() imgurl = '';
 @Input() name = '';
 @Input() price:number =0;
 @Input() priceBS:number =0;

}
