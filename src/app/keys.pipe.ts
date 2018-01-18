import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: object, args?: any): any {
    console.log('transform:', value);
    return Object.keys(value);
  }

}
