import { Component, Input, OnInit } from "@angular/core";
import { GameService } from "../services/game.service";

@Component({
  selector: 'cell-grid',
  template: `
    <div class="grid-container">
      <color-cell *ngFor="let color of colorList" [cellColor]="color" [winningColor]="winningColor"></color-cell>
    </div>
  `,
  styles: [`
    
  `],
})

export class CellGrid implements OnInit {
  @Input() colorList: string[] = []
  @Input() winningColor: string = '';
  ngOnInit(): void {
    
  }
}