import { Pipe, PipeTransform } from '@angular/core';
import {Turn} from '../models/turn';

@Pipe({
  name: 'score',
  pure: true
})
export class ScorePipe implements PipeTransform {

  transform(turns: Turn[], turnIndex: number): string {
    if (!turns[turnIndex]) {
      return '';
    }
    const score = turns.reduce((previousValue: number, currentValue: Turn, index: number, turnsArray: Turn[]) => {
      const firstDouble = turnsArray[index + 1]?.firstThrow;
      const secondDouble = turnsArray[index + 1]?.secondThrow ?? turnsArray[index + 2]?.firstThrow;
      const currentTurnScore = currentValue.firstThrow + currentValue?.secondThrow;
      const isStrike = currentValue.firstThrow === 10;
      const isSpare = currentTurnScore === 10;

      if (index > turnIndex) { return previousValue; }
      if (isStrike) {
        return previousValue + currentValue.firstThrow + firstDouble + secondDouble;
      }
      if (isSpare) {
        return previousValue + currentTurnScore + firstDouble;
      }
      return previousValue + currentTurnScore;
    }, 0);

    return isNaN(score) ? '' : score.toString();
  }
}
