import {Component, OnInit} from '@angular/core';
import {GameService} from './game/game.service';
import {Observable} from 'rxjs';
import {GameState} from './game/game-state.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public gameState$: Observable<GameState>;
  public gameState = GameState;

  constructor(private gameService: GameService) {
  }

  public ngOnInit(): void {
    this.gameState$ = this.gameService.gameState$;
  }
}
