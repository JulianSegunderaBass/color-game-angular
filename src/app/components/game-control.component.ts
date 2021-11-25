import { Component, OnInit } from "@angular/core";
import { ColorsService } from "../colors.service";

@Component({
  selector: 'game-control',
  template: `
    <div class="headline" [ngStyle]="{'background-color': gameStatus != '' ? winningColor : ''}">
      <p>The Great</p>
      <p class="current-color">{{ winningColor }}</p>
      <p>Color Game</p>
    </div>
    <div class="controls">
      <p (click)="setDifficulty('easy')" [ngClass]="{'active': gameDifficulty === 'easy'}">Easy</p>
      <p (click)="setDifficulty('hard')" [ngClass]="{'active': gameDifficulty === 'hard'}">Hard</p>
      <p (click)="resetColors()">Reset</p>
    </div>
    <p class="end-message success" *ngIf="gameStatus === 'win'">You won!</p>
    <p class="end-message failed" *ngIf="gameStatus === 'lose'">You lost!</p>
    <div class="information">
      <p>Click the cell with the matching color.</p>
      <p>Try an easier difficulty if you need more practice.</p>
    </div>
  `,
  styles: [`
    
  `]
})

export class GameControl implements OnInit {
  gameStatus: string = '';
  winningColor: string = '';
  gameDifficulty: string = '';

  constructor(private colorService: ColorsService) {
    this.colorService.gameResultChanged.subscribe((status: string) => {
      this.gameStatus = status;
    });
    this.colorService.winningColorChanged.subscribe((winningColor: string) => {
      this.winningColor = winningColor;
    });
    this.colorService.gameDifficultyChanged.subscribe((difficulty: string) => {
      this.gameDifficulty = difficulty;
    });
  }

  resetColors() {
    this.colorService.resetColors();
  }

  setDifficulty(diff: string) {
    this.colorService.changeDifficulty(diff);
  }

  ngOnInit(): void {
    this.gameDifficulty = this.colorService.gameDifficulty;
  }

}