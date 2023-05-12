import { Component,Input } from '@angular/core';

@Component({
  selector: 'h-container',
  templateUrl: './h-container.component.html',
  styleUrls: ['./h-container.component.css']
})
export class HContainerComponent {
@Input() headImg : string = ''
@Input() Category : string = ''
@Input() Section : string = ''
}
