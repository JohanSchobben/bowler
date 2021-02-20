import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../models/game';

@Component({
  selector: 'app-game-score',
  templateUrl: './game-score.component.html',
  styleUrls: ['./game-score.component.scss']
})
export class GameScoreComponent {
  @Input() public game: Game;
}
