import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: 'game-board',
  template: `
    <div class="container">
      <div class="board-content">
        <game-control 
          [winningColor]="winningColor"
          [gameStatus]="gameStatus" 
          (colorsReset)="onColorsReset()">
        </game-control>
        <cell-grid 
          [colorList]="colorList" 
          [winningColor]="winningColor"
          [gameStatus]="gameStatus" 
          (gameResult)="onGameFinish($event)">
        </cell-grid>
      </div>
    </div>
  `,
  styles: [`
    
  `],
})

export class GameBoard implements OnInit{
  @Input() colorList: string[] = [];
  @Input() winningColor: string = '';
  @Input() gameStatus: string = '';
  @Output() colorsReset = new EventEmitter();
  @Output() gameResult = new EventEmitter<string>();
  

  onColorsReset() {
    this.colorsReset.emit();
  }

  onGameFinish(status: string) {
    this.gameResult.emit(status);
  }

  ngOnInit(): void {
    
  }
}