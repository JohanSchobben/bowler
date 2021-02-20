import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Game} from './models/game';
import {Player} from './models/player';
import {GameState} from './game-state.enum';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gameSubject: BehaviorSubject<Game> = new BehaviorSubject<Game>(undefined);
  private currentPlayerIndex = 0;

  constructor() { }

  createNewGame(players: Player[]): void {
    const game = {
      players,
      state: GameState.Playing
    };
    this.gameSubject.next(game);
  }

  get currentGame$(): Observable<Game> {
    return this.gameSubject.asObservable();
  }
}
