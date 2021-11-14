import { Component } from "@angular/core";

@Component({
  selector: 'game-board',
  template: `
    <h2>Game Board</h2>
    <game-control></game-control>
    <cell-grid></cell-grid>
  `,
  styles: [`
    
  `]
})

export class GameBoard {

}