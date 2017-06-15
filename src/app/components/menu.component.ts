import {Component} from '@angular/core';

@Component({
  selector: 'kd-menu',
  template: `
  <nav class="desktop">
    <div class="menu clearfix">
      <a routerLink="" routerLinkActive="active" class="btn btn-default">
        Hosting
      </a>
      <a routerLink="/websites" routerLinkActive="active" class="btn btn-default">
        Websites
      </a>
      <a routerLink="/webapps" routerLinkActive="active" class="btn btn-default">
        Webapps
      </a>
      <a routerLink="/portfolio" routerLinkActive="active" class="btn btn-default">
        Portfolio
      </a>
      <a routerLink="/contact" routerLinkActive="active" class="btn btn-default">
        Contact
      </a>
    </div>
  </nav>
  `,
  styles: [`
    .desktop {
      margin-top: 30px;
    }
    .desktop .menu .btn{
      font-size: 32px;
      margin-right: 12px;
      border-radius: 2px;
    }
    .btn-default {
      background-color: rgba(255, 255, 255, 0.1);
    }
    .active {
      background-color: white;
    }
  `]
})

export class MenuComponent {
  
}
