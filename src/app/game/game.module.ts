import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateGameComponent } from './create-game/create-game.component';
import { GameComponent } from './game.component';
import {ReactiveFormsModule} from '@angular/forms';
import { GameScoreComponent } from './game-score/game-score.component';
import { PlayerScoreComponent } from './player-score/player-score.component';
import { TurnComponent } from './turn/turn.component';

@NgModule({
  declarations: [CreateGameComponent, GameComponent, GameScoreComponent, PlayerScoreComponent, TurnComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }
