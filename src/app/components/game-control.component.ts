import { Component, OnInit } from "@angular/core";
import { GameService } from "../services/game.service";

@Component({
  selector: 'game-control',
  template: `
    <div class="headline" [ngStyle]="{'background-color': winningColor}">
      <p>The Great</p>
      <p class="current-color">{{ winningColor }}</p>
      <p>Color Game</p>
    </div>
    <div class="controls">
      <p>Easy</p>
      <p class="active">Hard</p>
      <p>Reset</p>
    </div>
    <p class="end-message">You won!</p>
    <div class="information">
      <p>Click the cell with the matching color.</p>
      <p>You could try an easier difficulty if you need more practice.</p>
    </div>
  `,
  styles: [`
    
  `],
  providers: [GameService]
})

export class GameControl implements OnInit {
  winningColor: string = '';

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.winningColor = this.gameService.winningColor;
  }

}