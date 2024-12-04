import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FSElement, FSElementEmpty } from '../fselem';

@Component({
  selector: 'app-fsfileedit',
  imports: [],
  templateUrl: './fsfileedit.component.html',
  styleUrl: './fsfileedit.component.css'
})
export class FsfileeditComponent {
  @Input() content = '';
  @Output() done = new EventEmitter<Object>();

  cancelAction() {
    this.done.emit({save: false})
  }
  
  doneAction(content:string) {
    this.done.emit({save: true, content: content})
  }
}
