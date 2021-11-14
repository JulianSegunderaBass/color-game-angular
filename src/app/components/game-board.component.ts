import { Component, Input, OnInit } from "@angular/core";
import { GameService } from "../services/game.service";

@Component({
  selector: 'game-board',
  template: `
    <div class="container">
      <div class="board-content">
        <game-control [winningColor]="winningColor"></game-control>
        <cell-grid [colorList]="colorList"></cell-grid>
      </div>
    </div>
  `,
  styles: [`
    
  `],
})

export class GameBoard implements OnInit{
  @Input() colorList: string[] = [];
  winningColor: string = '';

  ngOnInit(): void {
    this.winningColor = this.colorList[Math.floor(Math.random() * this.colorList.length)];
  }
}