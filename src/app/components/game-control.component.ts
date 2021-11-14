import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { GameService } from "../services/game.service";

@Component({
  selector: 'game-control',
  template: `
    <div class="headline">
      <p>The Great</p>
      <p class="current-color">{{ winningColor }}</p>
      <p>Color Game</p>
    </div>
    <div class="controls">
      <p>Easy</p>
      <p class="active">Hard</p>
      <p (click)="resetColors()">Reset</p>
    </div>
    <p class="end-message" *ngIf="gameStatus === 'win'">You won!</p>
    <p class="end-message" *ngIf="gameStatus === 'lose'">You lost!</p>
    <div class="information">
      <p>Click the cell with the matching color.</p>
      <p>You could try an easier difficulty if you need more practice.</p>
    </div>
  `,
  styles: [`
    
  `]
})

export class GameControl implements OnInit {
  @Input() winningColor: string = '';
  @Output() colorsReset = new EventEmitter();
  gameStatus: string = '';

  constructor(private gameService: GameService) {}

  resetColors() {
    this.colorsReset.emit();
  }

  ngOnInit(): void {
    this.gameService.gameResult.subscribe((result: string) => {
      this.gameStatus = result;
    });
  }

}