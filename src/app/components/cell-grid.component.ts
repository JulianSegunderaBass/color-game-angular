import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: 'cell-grid',
  template: `
    <div class="grid-container" *ngIf="gameStatus === ''; else winningBlocks">
      <color-cell 
        *ngFor="let color of colorList" 
        [cellColor]="color" 
        [winningColor]="winningColor" 
        (gameResult)="onGameFinish($event)">
      </color-cell>
    </div>
    <ng-template #winningBlocks>
      <div class="grid-container">
        <color-cell 
          *ngFor="let color of colorList" 
          [cellColor]="winningColor" 
          [winningColor]="winningColor">
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
  @Output() gameResult = new EventEmitter<string>();

  onGameFinish(status: string) {
    this.gameResult.emit(status);
  }

  ngOnInit(): void {
    
  }
}