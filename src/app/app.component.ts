import { Component } from '@angular/core';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  template: `
    <game-board></game-board>
  `,
  styles: [`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    html {
      font-size: 62.5%;
    }
    body {
      font-family: 'Inter', sans-serif;
      line-height: 1;
    }
  `],
  providers: [GameService]
})
export class AppComponent {
  title = 'color-game-angular';
}
