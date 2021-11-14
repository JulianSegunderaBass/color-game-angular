import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CellGrid } from './components/cell-grid.component';
import { ColorCell } from './components/color-cell.component';
import { GameBoard } from './components/game-board.component';
import { GameControl } from './components/game-control.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoard,
    GameControl,
    CellGrid,
    ColorCell
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
