import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'color-cell',
  template: `
    <div class="color-cell" 
      [ngStyle]="{'background': cellColor}"
      [ngClass]="{'hidden': cellHidden}"
      (click)="onSelectCell()">
    </div>
  `,
  styles: [`
    
  `]
})

export class ColorCell {
  @Input('cellColor') cellColor: string = '';
  @Input() winningColor: string = '';
  @Input() counter: number = 0;
  @Output() gameResult = new EventEmitter<string>();
  @Output() decrementCounter = new EventEmitter();
  cellHidden: boolean = false;

  onSelectCell() {
    if (this.cellColor === this.winningColor) {
      this.gameResult.emit('win');
    } else {
      this.cellHidden = true;
      this.decrementCounter.emit();
      if (this.counter < 3) {
        this.gameResult.emit('lose');
      }
    }
  }
}