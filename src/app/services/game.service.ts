import { EventEmitter } from "@angular/core";

export class GameService {
  private colorList: string[] = [];
  gameResult = new EventEmitter<string>();

  getColors() {
    return this.colorList.slice();
  }

  generateColors() {
    this.colorList = [];
    for (let i = 0; i < 9; i++) {
      this.colorList.push(this.generateRandomColor());
    }
  }

  generateRandomColor() {
    let r: number = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let g: number = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let b: number = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    return `rgb(${r}, ${g}, ${b})`;
  }
}