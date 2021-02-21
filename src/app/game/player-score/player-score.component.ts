import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Player} from '../models/player';
import {Turn} from '../models/turn';

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerScoreComponent {
  @Input() player: Player = {
    name: 'cindy',
    turns: [
      {firstThrow: 2, secondThrow: 3},
      {firstThrow: 7, secondThrow: 3},
      {firstThrow: 4, secondThrow: 5},
      {firstThrow: 10},
      {firstThrow: 4, secondThrow: 2},
      {firstThrow: 10},
      {firstThrow: 10},
      {firstThrow: 10},
      {firstThrow: 10},
      {firstThrow: 1, secondThrow: 3},
    ]
  };

  calculateScore(turn: number): string {
    if (!this.player.turns[turn]) {
      return '';
    }
    console.log(this.player.name);
    const score = this.player.turns.reduce((previousValue: number, currentValue: Turn, index: number, turns: Turn[]) => {
      const firstDouble = turns[index + 1]?.firstThrow;
      const secondDouble = turns[index + 1]?.secondThrow ?? turns[index + 2]?.firstThrow;
      const currentTurnScore = currentValue.firstThrow + currentValue?.secondThrow;
      const isStrike = currentValue.firstThrow === 10;
      const isSpare = currentTurnScore === 10;

      if (index > turn) { return previousValue; }
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
