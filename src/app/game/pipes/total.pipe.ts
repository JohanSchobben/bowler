import { Pipe, PipeTransform } from '@angular/core';
import {Turn} from '../models/turn';
import {getTotalScore} from '../helpers/total.helper';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(turns: Turn[]): number {
    return getTotalScore(turns);
  }
}
