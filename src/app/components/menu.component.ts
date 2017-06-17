import {Component} from '@angular/core';

@Component({
  selector: 'kd-menu',
  template: `
  <nav class="desktop">
    <div class="menu clearfix">
      <a routerLink="" routerLinkActive="selected" [routerLinkActiveOptions]="{exact: true}" class="btn btn-default">
        <img src="/assets/img/logo.png" class="logo"><span class="light"></span>
      </a>
      <a routerLink="/hosting" routerLinkActive="selected" class="btn btn-default">
        <span class="glyphicon glyphicon-hdd"></span> Hosting<span class="light"></span>
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
    .logo {
      height: 36px;
    }
    .light {
      display: inline-block;
      width: 8px;
      height: 8px;
      background-color: rgb(226,0,0);
      box-shadow: inset 0px 1px 0px 0px rgba(250,250,250,0.5),
            0px 0px 3px 2px rgba(226,0,0,0.5);
      border-radius: 4px;
      top: -24px;
      right: -6px;
      position: relative;
    }
  `]
})

export class MenuComponent {

}
