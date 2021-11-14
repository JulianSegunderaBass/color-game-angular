import { Component } from "@angular/core";

@Component({
  selector: 'color-cell',
  template: `
    <div class="color-cell" style="background-color: red;"></div>
  `,
  styles: [`
    .color-cell {
      height: 9em;
      width: 9em;
      display: flex;
      cursor: pointer;
    }
  `]
})

export class ColorCell {

}