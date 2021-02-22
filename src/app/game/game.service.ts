import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, Subscription} from 'rxjs';
import {Game} from './models/game';
import {Player} from './models/player';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {GameState} from './game-state.enum';
import {PinService} from '../pin/services/pin.service';
import {addThrowToTurns, isTurnDone} from './helpers/turn.helper';

@Injectable({
  providedIn: 'root'
})
export class GameService implements OnDestroy {
  private gameSubject: BehaviorSubject<Game> = new BehaviorSubject<Game>(undefined);
  private turnsPlayedSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private pinSubscription: Subscription;

  constructor(private readonly pinService: PinService) {
    this.pinSubscription = this.pinService.pin$.subscribe(amount => {
      this.addThrow(amount);
    });
  }

  get currentGame$(): Observable<Game> {
    return this.gameSubject.asObservable();
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

  public ngOnDestroy(): void {
    this.pinSubscription.unsubscribe();
  }

  private addThrow(value: number): void {
    const game = this.gameSubject.getValue();
    const turnsPlayed = this.turnsPlayedSubject.getValue();
    const currentPlayerIndex = turnsPlayed % game.players.length;
    const player = game.players[currentPlayerIndex];

    player.turns = addThrowToTurns(player.turns, value);

    const newLastTurn = player.turns[player.turns.length - 1];
    if (isTurnDone(newLastTurn, player.turns.length)) {
      this.turnsPlayedSubject.next(turnsPlayed + 1);
    }

    this.gameSubject.next(game);
  }
}
