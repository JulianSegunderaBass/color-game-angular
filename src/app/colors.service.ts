import { EventEmitter } from "@angular/core";

export class ColorsService {
  // Base values
  colorList: string[] = [];
  winningColor: string = '';
  counter: number = 0;
  gameDifficulty: string = 'hard';
  gameResult: string = '';
  // Events
  colorsChanged = new EventEmitter<string[]>();
  winningColorChanged = new EventEmitter<string>();
  counterChanged = new EventEmitter<number>();
  gameDifficultyChanged = new EventEmitter<string>();
  gameResultChanged = new EventEmitter<string>();

  generateRandomColor() {
    let r: number = Math.floor((Math.floor(Math.random() * (255 - 0 + 1) + 0)) * 0.50);
    let g: number = Math.floor((Math.floor(Math.random() * (255 - 0 + 1) + 0)) * 0.50);
    let b: number = Math.floor((Math.floor(Math.random() * (255 - 0 + 1) + 0)) * 0.50);
    return `rgb(${r}, ${g}, ${b})`;
  }

  generateColors(num: number) {
    for (let i = 0; i < num; i++) {
      this.colorList.push(this.generateRandomColor());
    }
    this.colorsChanged.emit(this.colorList);
    this.counter = this.colorList.length;
    this.counterChanged.emit(this.counter);
    this.getWinningColor(this.colorList);
    this.resetOtherData();
    return this.colorList;
  }

  getWinningColor(arr: string[]) {
    this.winningColor = arr[Math.floor(Math.random() * arr.length)];
    this.winningColorChanged.emit(this.winningColor);
    return this.winningColor;
  }

  resetColors() {
    this.colorList = [];
    if (this.gameDifficulty === 'easy') {
      this.colorList = this.generateColors(6);
    } else {
      this.colorList = this.generateColors(9);
    }
  }

  resetOtherData() {
    this.gameResult = '';
    this.gameResultChanged.emit(this.gameResult);
  }

  changeDifficulty(diff: string) {
    this.gameDifficulty = diff;
    this.gameDifficultyChanged.emit(this.gameDifficulty);
    this.resetColors();
    this.resetOtherData();
  }

  decrementCounter() {
    this.counter = this.counter - 1;
    this.counterChanged.emit(this.counter);
  }

  finishGame(status: string) {
    this.gameResult = status;
    this.gameResultChanged.emit(this.gameResult);
  }
}