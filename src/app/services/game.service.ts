export class GameService {
  private colorList: string[] = [
    'rgb(69, 48, 157)',
    'rgb(145, 215, 48)',
    'rgb(25, 83, 64)',
    'rgb(48, 67, 15)',
    'rgb(80, 46, 75)',
    'rgb(98, 114, 175)',
    'rgb(250, 200, 164)',
    'rgb(147, 167, 214)',
    'rgb(85, 125, 196)',
  ]

  getColors() {
    return this.colorList.slice();
  }

  generateColors() {
    this.colorList = []
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