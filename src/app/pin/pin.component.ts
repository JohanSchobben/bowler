import { Component } from '@angular/core';
import {PinService} from './services/pin.service';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent {
  previousPinInTurn: number = undefined;
  showInvalidInput = false;

  constructor(private pinService: PinService) { }

  public addPin(amount: number): void {
    const isSecondThrow = this.previousPinInTurn !== undefined;
    const totalOverTwo = this.previousPinInTurn + amount;

    if (amount === 10) {
      this.pinService.insertPin(amount);
      return;
    }

    if (!isSecondThrow) {
      this.previousPinInTurn = amount;
      this.pinService.insertPin(amount);
      return;
    }

    if (totalOverTwo <= 10) {
      this.pinService.insertPin(amount);
      this.previousPinInTurn = undefined;
      this.showInvalidInput = false;
      return;
    }

    this.showInvalidInput = true;
  }
}
