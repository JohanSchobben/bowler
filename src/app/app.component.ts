import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameService} from './game/game.service';
import {Observable, Subscription} from 'rxjs';
import {GameState} from './game/game-state.enum';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public gameState$: Observable<GameState>;
  public gameState = GameState;
  private swSubscription: Subscription;
  showRefreshButton = true;

  constructor(private gameService: GameService, private swUpdate: SwUpdate) {
  }

  public ngOnInit(): void {
    this.gameState$ = this.gameService.gameState$;
    this.swSubscription = this.swUpdate.available.subscribe(() => {
      this.showRefreshButton = true;
    });
  }

  public ngOnDestroy(): void {
    this.swSubscription.unsubscribe();
  }

  public reload(): void {
    window.location.reload();
  }
}
