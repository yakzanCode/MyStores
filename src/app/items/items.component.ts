import { Component, Input } from '@angular/core';
import { Shoes } from '../Models/class';
import { shoesData } from '../data';

interface Data {
  name : string
  price : number
  priceBS : number
  color : string
  category : string
  onsale : boolean
  imgurl : string
}


@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})


export class ItemsComponent {

// @Input()  shoes: Shoes[] = []
  shoes: Shoes[] = shoesData;

}
