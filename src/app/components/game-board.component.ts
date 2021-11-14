import { Component } from "@angular/core";
import { GameService } from "../services/game.service";

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
    
  `],
  providers: [GameService]
})

export class GameBoard {

  constructor(private gameService: GameService) {}

}