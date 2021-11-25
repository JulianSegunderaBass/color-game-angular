import { Component, Input } from "@angular/core";
import { ColorsService } from "../colors.service";

@Component({
  selector: 'color-cell',
  template: `
    <div class="color-cell" 
      [ngStyle]="{'background-color': cellColor}"
      [ngClass]="{'hidden': cellHidden}"
      (click)="onSelectCell()">
    </div>
  `,
  styles: [`
    
  `]
})

export class ColorCell {
  @Input('cellColor') cellColor: string = '';
  @Input('winningColor') winningColor: string = '';
  counter: number = 0;
  cellHidden: boolean = false;

  constructor(private colorService: ColorsService) {
    this.colorService.counterChanged.subscribe((newCounter: number) => {
      this.counter = newCounter;
    });
  }

  onSelectCell() {
    if (this.cellColor === this.winningColor) {
      this.colorService.finishGame('win');
    } else {
      this.cellHidden = true;
      this.colorService.decrementCounter();
      if (this.counter < 2) {
        this.colorService.finishGame('lose');
      }
    }
  }
}