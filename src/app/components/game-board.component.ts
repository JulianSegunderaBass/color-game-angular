import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { GameService } from "../services/game.service";

@Component({
  selector: 'game-board',
  template: `
    <div class="container">
      <div class="board-content">
        <game-control [winningColor]="winningColor" (colorsReset)="onColorsReset()"></game-control>
        <cell-grid [colorList]="colorList" [winningColor]="winningColor"></cell-grid>
      </div>
    </div>
  `,
  styles: [`
    
  `],
})

export class GameBoard implements OnInit{
  @Input() colorList: string[] = [];
  @Input() winningColor: string = '';
  @Output() colorsReset = new EventEmitter();
  

  onColorsReset() {
    this.colorsReset.emit();
  }

  ngOnInit(): void {
    
  }
}