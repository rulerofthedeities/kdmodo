import {Component} from '@angular/core';

@Component({
  selector: 'kd-menu',
  template: `
  <nav class="desktop">
    <div class="menu clearfix">
      <a routerLink="" routerLinkActive="selected" [routerLinkActiveOptions]="{exact: true}" class="btn btn-default">
        <span class="glyphicon glyphicon-home"></span>
      </a>
      <a routerLink="/hosting" routerLinkActive="selected" class="btn btn-default">
        <span class="glyphicon glyphicon-hdd"></span> Hosting
      </a>
      <a routerLink="/websites" routerLinkActive="selected" class="btn btn-default">
        <span class="glyphicon glyphicon-picture"></span> Websites
      </a>
      <a routerLink="/webapps" routerLinkActive="selected" class="btn btn-default">
        <span class="glyphicon glyphicon-stats"></span> Webapps
      </a>
      <a routerLink="/portfolio" routerLinkActive="selected" class="btn btn-default">
        <span class="glyphicon glyphicon-th-list"></span> Portfolio
      </a>
      <a routerLink="/contact" routerLinkActive="selected" class="btn btn-default">
        <span class="glyphicon glyphicon-pencil"></span> Contact
      </a>
    </div>
  </nav>
  `,
  styles: [`
    .desktop {
      margin-top: 54px;
    }
    .desktop .menu .btn{
      font-size: 32px;
      margin-right: 12px;
      border-radius: 2px;
    }
    .btn {
      background-color: rgba(255, 255, 255, 0.1);
      color: #999;
      border: 0;
    }
    .btn:hover {
      border-bottom: 1px solid #ccc;
      color: #fff;
    }
    .selected {
      background-color: rgba(255, 255, 255, 0.1);
      border-bottom: 2px solid #eee;
      color: #eee;
    }
    .selected:hover {
      border-bottom: 2px solid #fff;
    }

  `]
})

export class MenuComponent {

}
