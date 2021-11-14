import { Component, OnInit } from "@angular/core";
import { GameService } from "../services/game.service";

@Component({
  selector: 'cell-grid',
  template: `
    <div class="grid-container">
      <color-cell *ngFor="let color of colorList" [cellColor]="color"></color-cell>
    </div>
  `,
  styles: [`
    
  `],
})

export class CellGrid implements OnInit {
  colorList: string[] = []
  constructor(private gameService: GameService) {}
  ngOnInit(): void {
    this.colorList = this.gameService.getColors();
  }
}