import { Pipe, PipeTransform } from '@angular/core';
import {Player} from '../models/player';
import {getTotalScore} from '../helpers/total.helper';
import {PlayerTotal} from '../models/player-total';

@Pipe({
  name: 'orderScore'
})
export class OrderScorePipe implements PipeTransform {

  transform(players: Player[]): PlayerTotal[] {
    return players.map(player => ({
      player,
      total: getTotalScore(player.turns)
    })).sort((playerA, playerB) => playerB.total - playerA.total);
  }
}
