import { Pipe, PipeTransform } from '@angular/core';
import {turnIsSpare} from '../helpers/turn.helper';
import {Turn} from '../models/turn';

@Pipe({
  name: 'spare',
  pure: false
})
export class SparePipe implements PipeTransform {

  transform(value: Turn): string {
    return turnIsSpare(value) ? '/' : value?.secondThrow?.toString();
  }

}
