import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { FSDirectory, FSElement, FSFile } from './fselem';
import { FSList } from './fslist';

@Injectable({
  providedIn: 'root'
})
export class FetchdirService {
  root:FSElement[] = [];

  constructor() {
    let s = localStorage.getItem('dom_file_system');
    console.log('ls', s);
    if(!s)
      this.root = FSList;
    else
      this.root = <FSElement[]>JSON.parse(s);
    localStorage.setItem('dom_file_system', JSON.stringify(this.root));
  }

  find_dlist(path:string[]) {
    let dl = this.root;
    if(path.length) {
      for(let i = 0; i < path.length; i++)
        dl = (<FSDirectory>dl.find(elem => elem.name == path[i])).elements;
    };
    return dl;
  }

  getDirList(path:string[]): Observable<FSElement[]> {
    return of(this.find_dlist(path));
  }

  fsAction(path:string[], cur_name:string, action:string, value:string):Observable<boolean> {
    const dl = this.find_dlist(path);
    if(action == 'newdir')
      dl.push(<FSDirectory>{name: value, elements:[]});
    else if(action == 'newfile')
      dl.push(<FSFile>{name: value, content: ''});
    else if(action == 'rendir' || action == 'renfile') {
      const el = <FSElement>dl.find(e => e.name == cur_name);
      el.name = value;
    } else if(action == 'delete') {
      const i = dl.findIndex(e => e.name == cur_name);
      dl.splice(i, 1);
    } else if(action == 'save') {
      const f = <FSFile>dl.find(e => e.name == cur_name);
      f.content = value;
    };
    localStorage.setItem('dom_file_system', JSON.stringify(this.root));
    return of(true);
  }
}
