import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateGameComponent } from './create-game/create-game.component';
import { GameComponent } from './game.component';
import {ReactiveFormsModule} from '@angular/forms';
import { GameScoreComponent } from './game-score/game-score.component';
import { PlayerScoreComponent } from './player-score/player-score.component';
import { TurnComponent } from './turn/turn.component';
import { ScorePipe } from './pipes/score.pipe';
import { ResultComponent } from './result/result.component';
import { TotalPipe } from './pipes/total.pipe';
import { OrderScorePipe } from './pipes/order-score.pipe';
import { UpperFirstPipe } from './pipes/upper-first.pipe';
import { StrikePipe } from './pipes/strike.pipe';
import { SparePipe } from './pipes/spare.pipe';

@NgModule({
  declarations: [
    CreateGameComponent,
    GameComponent,
    GameScoreComponent,
    PlayerScoreComponent,
    TurnComponent,
    ScorePipe,
    ResultComponent,
    TotalPipe,
    OrderScorePipe,
    UpperFirstPipe,
    StrikePipe,
    SparePipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }
