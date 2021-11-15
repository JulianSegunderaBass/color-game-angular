import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: 'cell-grid',
  template: `
    <div class="grid-container" *ngIf="gameStatus === ''; else evenBlocks">
      <color-cell 
        *ngFor="let color of colorList" 
        [cellColor]="color" 
        [winningColor]="winningColor" 
        [counter]="counter"
        (gameResult)="onGameFinish($event)"
        (decrementCounter)="onDecrementCounter()">
      </color-cell>
    </div>
    <ng-template #evenBlocks>
      <div class="grid-container">
        <color-cell 
          *ngFor="let color of colorList" 
          [cellColor]="winningColor" 
          [winningColor]="winningColor"
          [counter]="counter">
        </color-cell>
      </div>
    </ng-template>
  `,
  styles: [`
    
  `],
})

export class CellGrid implements OnInit {
  @Input() colorList: string[] = []
  @Input() winningColor: string = '';
  @Input() gameStatus: string = '';
  @Input() counter: number = 0;
  @Output() gameResult = new EventEmitter<string>();
  @Output() decrementCounter = new EventEmitter();

  onGameFinish(status: string) {
    this.gameResult.emit(status);
  }

  onDecrementCounter() {
    this.decrementCounter.emit();
  }

  ngOnInit(): void {
    // console.log(this.counter);
  }
}