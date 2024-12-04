import { CommonModule} from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { FSElement, FSUtil } from '../fselem';
import { FetchdirService } from '../fetchdir.service';

@Component({
  selector: 'app-fsview',
  imports: [CommonModule],
  templateUrl: './fsview.component.html',
  styleUrl: './fsview.component.css'
})
export class FsviewComponent implements OnInit, OnChanges{

  dlist:FSElement[] = [];

  @Input() path:string[] = [];
  @Output() addPath = new EventEmitter<string>();
  @Output() removePath = new EventEmitter();
  @Output() selElement = new EventEmitter<FSElement>();

  constructor (private fetchdirservice:FetchdirService) {
    
  }

  ngOnInit(): void {
//    this.getDirList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    if('path' in changes)
      this.getDirlist();
  }

  isDir(el:FSElement) {
    return FSUtil.isDir(el);
  }


  getDirlist() {
    this.fetchdirservice.getDirList(this.path)
        .subscribe(dlist => this.dlist = dlist);
  }

}
