import {Component, Input} from '@angular/core';

@Component({
  selector: 'kd-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})

export class MenuComponent {
  @Input() version: string;
  yellowLight: number = null;

  onHover(i: number) {
    this.yellowLight = i;
  }

  onMouseOut() {
    this.yellowLight = null;
  }
}
