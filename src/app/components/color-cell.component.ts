import { Component, Input } from "@angular/core";

@Component({
  selector: 'color-cell',
  template: `
    <div class="color-cell" [ngStyle]="{'background-color': cellColor}">{{ cellColor }}</div>
  `,
  styles: [`
    
  `]
})

export class ColorCell {
  @Input('cellColor') cellColor: string = '';
}