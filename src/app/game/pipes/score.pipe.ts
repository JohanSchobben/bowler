import { Pipe, PipeTransform } from '@angular/core';
import {Turn} from '../models/turn';

@Pipe({
  name: 'score',
  pure: false
})
export class ScorePipe implements PipeTransform {

  transform(turns: Turn[], turnIndex: number): string {
    if (!turns[turnIndex]) {
      return '';
    }
    const score = turns.reduce((previousValue: number, currentValue: Turn, index: number, turnsArray: Turn[]) => {
      const currentTurnScore = currentValue.firstThrow + currentValue?.secondThrow;
      const isStrike = currentValue.firstThrow === 10;
      const isSpare = currentTurnScore === 10;
      const firstDouble = currentValue.thirdThrow ?? turnsArray[index + 1]?.firstThrow;
      const secondDouble = currentValue.thirdThrow ?? turnsArray[index + 1]?.secondThrow ?? turnsArray[index + 2]?.firstThrow;

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
