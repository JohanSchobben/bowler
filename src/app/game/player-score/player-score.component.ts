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
}
