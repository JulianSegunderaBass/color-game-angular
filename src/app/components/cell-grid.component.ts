import { Component, OnInit } from "@angular/core";
import { ColorsService } from "../colors.service";

@Component({
  selector: 'cell-grid',
  template: `
    <div class="grid-container" *ngIf="gameStatus === ''; else evenBlocks">
      <color-cell *ngFor="let color of colorList" [cellColor]="color" [winningColor]="winningColor"></color-cell>
    </div>
    <ng-template #evenBlocks>
      <div class="grid-container">
        <color-cell *ngFor="let color of colorList" [cellColor]="winningColor" [winningColor]="winningColor">
        </color-cell>
      </div>
    </ng-template>
  `,
  styles: [`
    
  `],
})

export class CellGrid implements OnInit {
  colorList: string[] = [];
  gameStatus: string = '';
  winningColor: string = '';

  constructor(private colorService: ColorsService) {
    this.colorService.colorsChanged.subscribe((colors: string[]) => {
      this.colorList = colors;
    });
    this.colorService.gameResultChanged.subscribe((status: string) => {
      this.gameStatus = status;
    });
    this.colorService.winningColorChanged.subscribe((winningColor: string) => {
      this.winningColor = winningColor;
    });
  }

  ngOnInit(): void {
    this.colorService.generateColors(9);
  }
}