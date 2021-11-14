import { Component } from "@angular/core";

@Component({
  selector: 'cell-grid',
  template: `
    <div class="container">
      <div class="cell-grid">
        <color-cell></color-cell>
        <color-cell></color-cell>
        <color-cell></color-cell>
        <color-cell></color-cell>
        <color-cell></color-cell>
        <color-cell></color-cell>
        <color-cell></color-cell>
        <color-cell></color-cell>
        <color-cell></color-cell>
      </div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    .cell-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      justify-items: center;
      gap: 2em;
      margin: auto 0;
    }
  `]
})

export class CellGrid {

}