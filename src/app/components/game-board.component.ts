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
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    .container {
      max-width: 1300px;
      height: 90vh;
      margin: 30px auto;
      background-color: #e9ecef;
      font-family: 'Inter', sans-serif;
      font-size: 62.5%;
    }
    .board-content {
      font-size: 2em;
      padding: 1.5em 2em;
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 2em;
    }
  `]
})

export class GameBoard {

}