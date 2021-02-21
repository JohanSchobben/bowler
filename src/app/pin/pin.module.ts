import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinComponent } from './pin.component';



@NgModule({
  declarations: [PinComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PinComponent
  ]
})
export class PinModule { }
