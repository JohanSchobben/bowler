import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperFirst'
})
export class UpperFirstPipe implements PipeTransform {

  transform(value: string): string {
    const firstLetter = value[0];
    const restOfWord = value.substring(1);
    return firstLetter.toUpperCase() + restOfWord;
  }

}
