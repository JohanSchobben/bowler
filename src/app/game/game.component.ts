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
    console.log(this.state);
    console.log(this.gameState);
  }

}
