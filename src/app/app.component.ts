import { Component } from '@angular/core';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root App</h1>
    <game-board></game-board>
  `,
  styles: [`
    
  `],
  providers: [GameService]
})
export class AppComponent {
  title = 'color-game-angular';
}
