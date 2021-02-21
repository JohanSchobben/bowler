import {Component, Input} from '@angular/core';
import {Player} from '../models/player';

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.scss'],
})
export class PlayerScoreComponent {
  @Input() player: Player;
}
