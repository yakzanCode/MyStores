import { Component,Input } from '@angular/core';

@Component({
  selector: 'navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component {
@Input() section: string = ''

}
