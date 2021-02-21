import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {GameModule} from './game/game.module';
import {PinModule} from './pin/pin.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GameModule,
    PinModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
