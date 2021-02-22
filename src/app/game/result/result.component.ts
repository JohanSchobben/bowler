import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../models/game';
import {PlayerTotal} from '../models/player-total';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() results: PlayerTotal[];
}
