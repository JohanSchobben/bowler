import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {forbiddenValues} from '../validators/forbidden-values.validator';
import {Player} from '../models/player';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {
  public playerNames: string[] = [];
  public form: FormGroup;

  @Output() create: EventEmitter<Player[]> = new EventEmitter<Player[]>();
  showMaxPlayerError = false;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, forbiddenValues(this.playerNames)]),
    });
  }

  public onSubmit(): void {
    if (this.playerNames.length >= 6){
      this.showMaxPlayerError = true;
      return;
    }
    if (this.form.valid) {
      this.playerNames.push(this.form.controls.name.value);
      this.form.reset();
    }
  }

  public createGame(): void {
    if (!this.playerNames.length) {

    } else {
      const players: Player[] = this.playerNames.map(name => ({name, turns: []}));
      this.create.emit(players);
    }
  }
}
