import { Pipe, PipeTransform } from '@angular/core';
import {turnIsStrike} from '../helpers/turn.helper';
import {Turn} from '../models/turn';

@Pipe({
  name: 'strike',
  pure: true
})
export class StrikePipe implements PipeTransform {

  transform(value: Turn): string {
    return turnIsStrike(value) ? 'X' : value?.firstThrow.toString();
  }

}
