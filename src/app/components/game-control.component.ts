import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: 'game-control',
  template: `
    <div class="headline" [ngStyle]="{'background-color': winningColor}">
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
      <p>You could try an easier difficulty if you need more practice.</p>
    </div>
  `,
  styles: [`
    
  `]
})

export class GameControl implements OnInit {
  @Input() winningColor: string = '';
  @Input() gameStatus: string = '';
  @Input() gameDifficulty: string = '';
  @Output() colorsReset = new EventEmitter();
  @Output() changeDifficulty = new EventEmitter<string>();

  resetColors() {
    this.colorsReset.emit();
  }

  setDifficulty(diff: string) {
    this.changeDifficulty.emit(diff);
    // console.log(this.gameDifficulty);
  }

  ngOnInit(): void {
  }

}