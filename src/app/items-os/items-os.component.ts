import { Component, Input, OnInit } from '@angular/core';
import { Shoes } from '../Models/class';
import { shoesData } from '../data';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'items-os',
  templateUrl: './items-os.component.html',
  styleUrls: ['./items-os.component.css']
})
export class ItemsOsComponent {

  shoes: Shoes[] = shoesData;
  filteredArray: Shoes[] = []
  @Input() onSale: boolean = true
  @Input() sec: string = ''
  @Input() cat: string = ''

  ngOnInit(){
    this.filteredArray = this.shoes.filter((s:any)=> {
      return  s.onsale === this.onSale
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
      200: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
