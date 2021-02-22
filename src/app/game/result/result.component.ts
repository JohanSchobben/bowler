import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Game} from '../models/game';
import {PlayerTotal} from '../models/player-total';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() results: PlayerTotal[];
  @Output() rematch: EventEmitter<void> = new EventEmitter<void>();
  @Output() newGame: EventEmitter<void> = new EventEmitter<void>();

  public onRematchClick(): void {
    this.rematch.emit();
  }

  public onNewGameClick(): void {
    this.newGame.emit();
  }
}
