import { Component, Input, OnInit } from '@angular/core';
import { Shoes } from '../Models/class';
import { shoesData } from '../data';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'items-bestseller',
  templateUrl: './items-bestseller.component.html',
  styleUrls: ['./items-bestseller.component.css']
})
export class ItemsBestsellerComponent {

  shoes: Shoes[] = shoesData;
  filteredArray: Shoes[] = []
  @Input() bestS: boolean = true
  @Input() sec: string = ''
  @Input() cat: string = ''

  ngOnInit(){
    this.filteredArray = this.shoes.filter((s:any)=> {
      return  s.bestseller === this.bestS
            &&  s.section === this.sec
            &&  s.category === this.cat
      })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['pre', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
}
