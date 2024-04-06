import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'initials',
  standalone: true
})
export class InitialsPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    return value.split(' ')
      .map(name => name[0])
      .join('');
    // return value.split(' ')
    //   .reduce((previousValue, currentValue) => {
    //     return previousValue + currentValue[0]
    //   }, '')
  }

}
