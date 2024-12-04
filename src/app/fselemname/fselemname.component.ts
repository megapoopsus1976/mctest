import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fselemname',
  imports: [CommonModule],
  templateUrl: './fselemname.component.html',
  styleUrl: './fselemname.component.css'
})
export class FselemnameComponent {
  @Input() btnName:string = '';
  @Input() placeholder:string = '';
  @Input() value:string = '';
  @Output() done = new EventEmitter<string>();

  doneAction(name:string) {
    if(!name.length)
      return;
    this.done.emit(name);
  }
  cancelAction() {
    this.done.emit('');
  }
}
