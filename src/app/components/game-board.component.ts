import { Component } from "@angular/core";

@Component({
  selector: 'game-board',
  template: `
    <div class="container">
      <div class="board-content">
        <game-control></game-control>
        <cell-grid></cell-grid>
      </div>
    </div>
  `,
  styles: [`
    
  `]
})

export class GameBoard {

}