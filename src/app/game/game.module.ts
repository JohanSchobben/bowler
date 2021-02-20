import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateGameComponent } from './create-game/create-game.component';
import { GameComponent } from './game.component';
import {ReactiveFormsModule} from '@angular/forms';
import { GameScoreComponent } from './game-score/game-score.component';

@NgModule({
  declarations: [CreateGameComponent, GameComponent, GameScoreComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }
