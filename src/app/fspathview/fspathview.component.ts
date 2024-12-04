import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fspathview',
  imports: [],
  templateUrl: './fspathview.component.html',
  styleUrl: './fspathview.component.css'
})
export class FspathviewComponent {
  @Input() path:string[] = [];
}
