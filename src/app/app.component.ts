import { Component, OnInit } from '@angular/core';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  template: `
    <game-board [colorList]="colorList" [winningColor]="winningColor" (colorsReset)="onColorsReset()"></game-board>
  `,
  styles: [`
    
  `],
  providers: [GameService]
})
export class AppComponent implements OnInit {
  title = 'color-game-angular';
  colorList: string[] = []
  winningColor: string = '';

  constructor(private gameService: GameService) {}

  onColorsReset() {
    this.gameService.generateColors();
    this.colorList = this.gameService.getColors();
    this.winningColor = this.colorList[Math.floor(Math.random() * this.colorList.length)];
    this.gameService.gameResult.emit('');
  }

  ngOnInit(): void {
    this.gameService.generateColors();
    this.colorList = this.gameService.getColors();
    this.winningColor = this.colorList[Math.floor(Math.random() * this.colorList.length)];
    this.gameService.gameResult.emit('');
  }
}
