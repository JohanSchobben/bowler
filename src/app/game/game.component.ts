import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {GameService} from './game.service';
import {GameState} from './game-state.enum';
import {Game} from './models/game';
import {Player} from './models/player';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  public gameState = GameState;
  public game: Game;
  private gameSubscription: Subscription;

  constructor(private gameService: GameService) { }

  public ngOnInit(): void {
    this.gameSubscription = this.gameService.currentGame$.subscribe(game => {
      this.game = game;
    });
  }

  public onCreate(players: Player[]): void {
    this.gameService.createNewGame(players);
  }

  public ngOnDestroy(): void {
    this.gameSubscription.unsubscribe();
  }

}
