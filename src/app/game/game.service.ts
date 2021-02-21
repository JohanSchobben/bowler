import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {Game} from './models/game';
import {Player} from './models/player';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {GameState} from './game-state.enum';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gameSubject: BehaviorSubject<Game> = new BehaviorSubject<Game>(undefined);
  private turnsPlayedSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
    this.currentFrame$.subscribe();
  }

  get currentGame$(): Observable<Game> {
    return this.gameSubject.asObservable();
  }

  get currentFrame$(): Observable<number> {
    return combineLatest([this.gameSubject, this.turnsPlayedSubject])
      .pipe(
        map(([game, turnsPlayed]) => {
          return turnsPlayed % game?.players.length;
        })
      );
  }

  get gameState$(): Observable<GameState> {
    return combineLatest([this.gameSubject, this.turnsPlayedSubject])
      .pipe(
        map(([game, turnsPlayed]) => {
          if (!game) {
            return GameState.New;
          }
          if (turnsPlayed < game.players.length * 10) {
            return GameState.Playing;
          }
          return GameState.Over;
        }),
        distinctUntilChanged()
      );
  }

  createNewGame(players: Player[]): void {
    const game = {
      players,
    };
    this.gameSubject.next(game);
    this.turnsPlayedSubject.next(0);
  }

  // private addThrow(value: number) {
  //   const game = this.gameSubject.getValue();
  //   const player = game.players[this.currentPlayerIndex];
  //   const lastTurn = player.turns[player.turns.length - 1];
  //
  //   if (lastTurn === undefined) {
  //     lastTurn.secondThrow = value;
  //     this.turnsPlayedSubject.next();
  //   } else {
  //     const newTurn: Turn = {firstThrow: value};
  //     player.turns.push(newTurn);
  //   }
  // }

}
