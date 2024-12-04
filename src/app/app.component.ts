import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FsviewComponent } from './fsview/fsview.component';
import { FspathviewComponent } from './fspathview/fspathview.component';
import { FetchdirService } from './fetchdir.service';
import { FselemnameComponent } from './fselemname/fselemname.component';
import { FSElement,FSUtil,FSElementEmpty } from './fselem';
import { FsfileeditComponent } from './fsfileedit/fsfileedit.component';
import { FsfilecontentPipe } from './fsfilecontent.pipe';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FsviewComponent, FspathviewComponent, FselemnameComponent, FsfileeditComponent, FsfilecontentPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mctest';

  constructor(private fetchdirservice:FetchdirService) {
  }

  _path:string[] = [];
  _cur_elem:FSElement = FSElementEmpty;

  fselemaction: 'none' | 'newdir' | 'rendir' | 'newfile' | 'renfile' = 'none';
  fsfiledit: boolean = false;

  get path() {
    return this._path;
  }

  set path(p:string[]){
    this._path = p;
  }

  get cur_elem() {
    return this._cur_elem;
  }

  set cur_elem(el){
    this._cur_elem = el;
  }

  selElement(el:FSElement) {
    this.cur_elem = el;
  }

  removePath() {
    this.path = this.path.slice(0, -1);
    this.cur_elem = FSElementEmpty;
  }

  addPath(dir_name:string) {
    this.path = [... this.path, dir_name];
    this.cur_elem = FSElementEmpty;
  }

  isDir(el:FSElement) {
    return FSUtil.isDir(el);
  }

  fselemnameDone(name:string) {
    if(!name.length) {
      this.fselemaction = 'none';
      return;
    };

    this.fetchdirservice.fsAction(this.path, this.cur_elem.name, this.fselemaction, name)
        .subscribe(result => {
          if(result) {
//              this.path = this.path;
              this.fselemaction = 'none';
          }
        });

  }

  deleteAction() {
    this.fetchdirservice.fsAction(this.path, this.cur_elem.name, 'delete', '')
        .subscribe(result => {
          if(result) {
          }
        });
  }
  
  fseditDone(res:Object) {
    interface result {
      save:boolean;
      content:string;
    }
    if((<result>res).save) {
      this.fetchdirservice.fsAction(this.path, this.cur_elem.name, 'save', (<result>res).content)
      .subscribe(result => {
        if(result) {
        }
      });
    }
    this.fsfiledit = false;
  }
}
