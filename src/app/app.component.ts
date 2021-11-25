import { Component } from '@angular/core';
import { ColorsService } from './colors.service';

@Component({
  selector: 'app-root',
  template: `
    <game-board></game-board>
  `,
  styles: [`
    
  `],
  providers: [ColorsService]
})
export class AppComponent {
  title = 'color-game-angular';
}
