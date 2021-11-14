import { Component } from "@angular/core";

@Component({
  selector: 'game-control',
  template: `
    <div class="container">
      <div class="headline">
        <p>The Great</p>
        <p class="current-color">RGB(255, 255, 255)</p>
        <p>Color Game</p>
      </div>
      <div class="controls">
        <p>Easy</p>
        <p class="active">Hard</p>
        <p>Reset</p>
      </div>
      <p class="end-message">You won!</p>
      <div class="information">
        <p>Click the cell with the matching color.</p>
        <p>You could try an easier difficulty if you need more practice.</p>
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
      font-size: 62.5%;
      display: flex;
      flex-direction: column;
      gap: 1em;
    }
    .headline {
      font-size: 1.5em;
      background-color: blue;
      text-align: center;
      padding: 1em;
      display: flex;
      flex-direction: column;
      gap: 0.5em;
    }
    .headline p {
      color: white;
    }
    .current-color {
      font-weight: 700;
    }
    .controls {
      display: flex;
      justify-content: space-between;
      font-size: 1.5em;
    }
    .controls p {
      background-color: #ced4da;
      padding: 0.5em;
      font-size: 1.2em;
      flex-grow: 1;
      text-align: center;
      cursor: pointer;
    }
    .controls p.active {
      background-color: blue;
      color: white;
    }
    .end-message {
      font-weight: 700;
      font-size: 1.5em;
      text-align: center;
      color: green;
    }
    .information {
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      font-size: 1.2em;
    }
  `]
})

export class GameControl {

}