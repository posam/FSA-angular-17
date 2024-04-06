import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sign',
  standalone: true
})
export class SignPipe implements PipeTransform {

  transform(value: number | null): string {
    if (!value) {
      return '0';
    }

    return (value > 0 ? '+' : '-') + value;
  }

}
