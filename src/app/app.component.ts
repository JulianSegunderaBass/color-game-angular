import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <game-board 
      [colorList]="colorList" 
      [winningColor]="winningColor"
      [gameStatus]="gameResult"
      [gameDifficulty]="gameDifficulty"
      (changeDifficulty)="onDifficultyChange($event)"
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
  gameDifficulty: string = 'hard';
  winningColor: string = '';
  gameResult: string = '';

  generateColors(num: number) {
    for (let i = 0; i < num; i++) {
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
    if (this.gameDifficulty === 'easy') {
      this.generateColors(6);
    } else {
      this.generateColors(9);
    }
    this.gameResult = '';
  }

  onDifficultyChange(diff: string) {
    this.gameDifficulty = diff;
    this.colorList = [];
    if (this.gameDifficulty === 'easy') {
      this.generateColors(6);
    } else {
      this.generateColors(9);
    }
    this.gameResult = '';
  }

  onGameFinish(status: string) {
    this.gameResult = status;
    console.log(this.gameResult);
  }

  ngOnInit(): void {
    this.generateColors(9);
  }
}
