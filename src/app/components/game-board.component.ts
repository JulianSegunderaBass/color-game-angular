import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: 'game-board',
  template: `
    <div class="container">
      <div class="board-content">
        <game-control 
          [winningColor]="winningColor"
          [gameStatus]="gameStatus"
          [gameDifficulty]="gameDifficulty"
          (changeDifficulty)="onDifficultyChange($event)"
          (colorsReset)="onColorsReset()">
        </game-control>
        <cell-grid 
          [colorList]="colorList" 
          [winningColor]="winningColor"
          [gameStatus]="gameStatus" 
          [counter]="counter"
          (decrementCounter)="onDecrementCounter()"
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
  @Input() gameDifficulty: string = '';
  @Input() counter: number = 0;
  @Output() changeDifficulty = new EventEmitter<string>();
  @Output() colorsReset = new EventEmitter();
  @Output() gameResult = new EventEmitter<string>();
  @Output() decrementCounter = new EventEmitter();
  

  onColorsReset() {
    this.colorsReset.emit();
  }

  onDecrementCounter() {
    this.decrementCounter.emit();
  }

  onDifficultyChange(diff: string) {
    this.changeDifficulty.emit(diff);
  }

  onGameFinish(status: string) {
    this.gameResult.emit(status);
  }

  ngOnInit(): void {
    
  }
}