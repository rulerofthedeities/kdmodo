import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'kd-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})

export class MenuComponent {
  mobileMenu = false;
  yellowLight: number = null;

  constructor (
    private router: Router
  ) {}

  onHover(i: number) {
    this.yellowLight = i;
  }
  onMouseOut() {
    this.yellowLight = null;
  }

  toggleActive(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.mobileMenu = !this.mobileMenu;
  }

  isActive(path: string): boolean {
    const routerPath = this.router.url;
    if (this.mobileMenu || routerPath.substring(0, path.length) === path) {
      return true;
    } else {
      return false;
    }
  }
}
