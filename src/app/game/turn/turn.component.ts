import {Component, Input, OnInit} from '@angular/core';
import {Turn} from '../models/turn';

@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['./turn.component.scss']
})
export class TurnComponent implements OnInit {
  @Input() turn: Turn;
  @Input() score: string;
  @Input() tenthTurn = false;

  ngOnInit(): void {
  }

}
