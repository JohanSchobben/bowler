import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Game} from './models/game';
import {Player} from './models/player';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gameSubject: BehaviorSubject<Game> = new BehaviorSubject<Game>(undefined);

  constructor() { }

  createNewGame(players: Player[]): void {
    const game = {
      players
    };
    this.gameSubject.next(game);
  }
}
