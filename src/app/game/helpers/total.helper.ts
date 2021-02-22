import {Turn} from '../models/turn';

export function getTotalScore(turns: Turn[]) {
  return turns.reduce((previousValue: number, currentValue: Turn, index: number, turnsArray: Turn[]) => {
    const firstDouble = currentValue.thirdThrow ?? turnsArray[index + 1]?.firstThrow ?? 0;
    const secondDouble = currentValue.thirdThrow ?? turnsArray[index + 1]?.secondThrow ?? turnsArray[index + 2]?.firstThrow ?? 0;
    const secondThrow = currentValue?.secondThrow ?? 0;
    const currentTurnScore = currentValue.firstThrow + secondThrow;
    const isStrike = currentValue.firstThrow === 10;
    const isSpare = currentTurnScore === 10;

    if (isStrike) {
      return previousValue + currentValue.firstThrow + firstDouble + secondDouble;
    }
    if (isSpare) {
      return previousValue + currentTurnScore + firstDouble;
    }
    return previousValue + currentTurnScore;
  }, 0);
}
