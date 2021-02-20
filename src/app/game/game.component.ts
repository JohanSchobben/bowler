import {Component, OnInit} from '@angular/core';
import {GameService} from './game.service';
import {GameState} from './game-state.enum';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public state: GameState = GameState.New;
  public gameState = GameState;

  constructor(private gameService: GameService) { }

  public ngOnInit(): void {
    this.gameService.currentGame$.subscribe(game => {
      if (!game) {
        this.state = GameState.New;
      } else {
        this.state = GameState.Playing;
      }
    });
  }

}
