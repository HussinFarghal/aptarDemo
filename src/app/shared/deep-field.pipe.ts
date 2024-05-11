import {Pipe, PipeTransform} from '@angular/core';

@Pipe({standalone: true, name: 'deepField'})
export class DeepFieldPipe implements PipeTransform {
  transform(value : any, path : string) : any {
    return path.split('.').reduce((prev, curr) => {
      return prev ? prev[curr] : null;
    }, value);
  }
}
