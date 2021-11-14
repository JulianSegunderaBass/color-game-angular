import { Component, OnInit } from '@angular/core';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  template: `
    <game-board [colorList]="colorList"></game-board>
  `,
  styles: [`
    
  `],
  providers: [GameService]
})
export class AppComponent implements OnInit {
  title = 'color-game-angular';
  colorList: string[] = []

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.generateColors();
    this.colorList = this.gameService.getColors();
  }
}
