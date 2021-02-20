import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Game} from './models/game';
import {Player} from './models/player';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gameSubject: BehaviorSubject<Game> = new BehaviorSubject<Game>(undefined);
  private currentPlayerIndex: number = 0;

  constructor() { }

  createNewGame(players: Player[]): void {
    const game = {
      players
    };
    this.gameSubject.next(game);
  }

  get currentGame$(): Observable<Game> {
    return this.gameSubject.asObservable();
  }
}
