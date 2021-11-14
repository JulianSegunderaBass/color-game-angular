import { Component, Input } from "@angular/core";
import { GameService } from "../services/game.service";

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

  constructor(private gameService: GameService) {}

  onSelectCell() {
    if (this.cellColor === this.winningColor) {
      this.gameService.gameResult.emit('win');
    }
  }
}