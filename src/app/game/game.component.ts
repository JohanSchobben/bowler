import {Component, OnInit} from '@angular/core';
import {GameService} from './game.service';
import {GameState} from './game-state.enum';
import {Game} from './models/game';
import {Player} from './models/player';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public gameState = GameState;
  public game$: Observable<Game>;
  public gameState$: Observable<GameState>;
  player: Player = {
    name: 'Bob',
    turns: [
      {firstThrow: 2, secondThrow: 7},
      {firstThrow: 10},
      {firstThrow: 1, secondThrow: 8},
      {firstThrow: 0, secondThrow: 10},
    ]
  };

  constructor(private gameService: GameService) { }

  public ngOnInit(): void {
    this.game$ = this.gameService.currentGame$;
    this.gameState$ = this.gameService.gameState$;
  }

  public onCreate(players: Player[]): void {
    this.gameService.createNewGame(players);
  }
}
