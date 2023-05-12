import { Component, Input, OnInit } from '@angular/core';
import { Shoes } from '../Models/class';
import { shoesData } from '../data';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'items-new',
  templateUrl: './items-new.component.html',
  styleUrls: ['./items-new.component.css']
})
export class ItemsNewComponent {
  shoes: Shoes[] = shoesData;
  filteredArray: Shoes[] = []
  @Input() New: boolean = false
  @Input() sec: string = ''
  @Input() cat: string = ''
  

  ngOnInit(){
    this.filteredArray = this.shoes.filter((s:any)=> {
      return  s.new === this.New
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
        items: 4
      }
    },
    nav: true
  }
}
