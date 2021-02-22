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

  constructor(private gameService: GameService) { }

  public ngOnInit(): void {
    this.game$ = this.gameService.currentGame$;
    this.gameState$ = this.gameService.gameState$;
  }

  public onCreate(players: Player[]): void {
    this.gameService.createNewGame(players);
  }

  public onRematch() {
    this.gameService.rematch()
  }

  public onNewGame() {
    this.gameService.clearGame();
  }
}
