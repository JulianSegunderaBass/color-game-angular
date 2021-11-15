import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <game-board 
      [colorList]="colorList" 
      [winningColor]="winningColor"
      [gameStatus]="gameResult"
      (colorsReset)="onColorsReset()" 
      (gameResult)="onGameFinish($event)">
    </game-board>
  `,
  styles: [`
    
  `]
})
export class AppComponent implements OnInit {
  title = 'color-game-angular';
  colorList: string[] = [];
  winningColor: string = '';
  gameResult: string = '';

  generateColors() {
    for (let i = 0; i < 9; i++) {
      this.colorList.push(this.generateRandomColor());
    }
    this.winningColor = this.colorList[Math.floor(Math.random() * this.colorList.length)];
  }

  generateRandomColor() {
    let r: number = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let g: number = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let b: number = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    return `rgb(${r}, ${g}, ${b})`;
  }

  onColorsReset() {
    this.colorList = [];
    this.generateColors();
    this.gameResult = '';
  }

  onGameFinish(status: string) {
    this.gameResult = status;
    console.log(this.gameResult);
  }

  ngOnInit(): void {
    this.generateColors();
  }
}
