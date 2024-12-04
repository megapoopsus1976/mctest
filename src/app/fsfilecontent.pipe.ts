import { Pipe, PipeTransform } from '@angular/core';
import { FSElement, FSFile } from './fselem';

@Pipe({
  name: 'fsfilecontent'
})
export class FsfilecontentPipe implements PipeTransform {

  transform(el: FSElement): string {
    return (<FSFile>el).content;
  }

}
