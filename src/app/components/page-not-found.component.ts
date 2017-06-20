import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  template: `
    <section class="a404">
      <div class="panel">
        <img src="{{img}}" class="pull-left" *ngIf="img">
        <div class="txt" [class.wide]="!img">
          <h1>Error: De Pagina \`{{this.url}}´ bestaat niet.</h1>
          <div class="content">
            <p>
              <a routerLink="/">
                <span class="glyphicon glyphicon-home"></span> Naar de homepagina.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['page.component.css']
})

export class PageNotFoundComponent implements OnInit {
  url = '';
  img: string;

  constructor (
    private router: Router
  ) {}

  ngOnInit() {
    this.url = this.router.url;
    this.img = '/assets/img/404.jpg';
  }
}
