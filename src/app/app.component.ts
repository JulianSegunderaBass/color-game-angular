import { Component } from '@angular/core';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  template: `
    <game-board></game-board>
  `,
  styles: [`
    
  `],
  providers: [GameService]
})
export class AppComponent {
  title = 'color-game-angular';
}
