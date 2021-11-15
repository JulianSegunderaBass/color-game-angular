import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'color-cell',
  template: `
    <div class="color-cell" [ngStyle]="{'background-color': cellColor}" (click)="onSelectCell()">{{ cellColor }}</div>
  `,
  styles: [`
    
  `]
})

export class ColorCell {
  @Input('cellColor') cellColor: string = '';
  @Input() winningColor: string = '';
  @Output() gameResult = new EventEmitter<string>();

  onSelectCell() {
    if (this.cellColor === this.winningColor) {
      this.gameResult.emit('win');
    }
  }
}