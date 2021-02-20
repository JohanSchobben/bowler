import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {forbiddenValues} from '../validators/forbidden-values.validator';
import {Player} from '../models/player';
import {GameService} from '../game.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {
  public playerNames: string[] = [];
  public form: FormGroup;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, forbiddenValues(this.playerNames)]),
    });
  }

  public onSubmit(): void {
    if (!this.form.valid) {
    } else {
      this.playerNames.push(this.form.controls.name.value);
      this.form.reset();
    }
  }

  public createGame(): void {
    if (!this.playerNames.length) {

    } else {
      const players: Player[] = this.playerNames.map(name => ({name}));
      this.gameService.createNewGame(players);
    }
  }
}
