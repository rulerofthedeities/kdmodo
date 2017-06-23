import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/takeWhile';

interface Portfolio {
  alias: string;
  name: string;
  description: string;
  url?: string;
}

@Component({
  template: `
    <section>
      <div class="panel">
        <img src="{{img}}" class="pull-left" *ngIf="img">
        <div class="txt" [class.wide]="!img">
          <h1>{{tab}}</h1>
          <div class="content">
            <p *ngFor="let line of text">
              {{line}}
            </p>
            <ul *ngIf="tab==='Portfolio'" class="portfolio list-unstyled">
              <li 
                *ngFor="let site of portfolio"
                class="portfolio-item"
                [class.clickable]="site.url"
                (click)="onGoToSite(site.url)">
                <img src="/assets/img/portfolio/{{site.alias}}.jpg" class="pull-left">
                <div class="pdata">
                  <div class="title">{{site.name}}</div>
                  <div class="description">{{site.description}}</div>
                </div>
                <div class="clearfix"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['page.component.css']
})

export class PageComponent implements OnInit, OnDestroy {
  private componentActive = true;
  tab: string;
  img: string;
  text: string[];
  portfolio: Portfolio[];

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route
    .data
    .takeWhile(() => this.componentActive)
    .subscribe(data => this.setTab(data.tab));
  }

  onGoToSite(url: string) {
    if (url) {
      window.location.href = url;
    }
  }

  private setTab(tab: string) {
    this.tab = tab;
    this.setImage(tab.toLowerCase());
    this.setText(tab.toLowerCase());
  }

  private setImage(tab: string) {
    switch (tab) {
      case 'portfolio':
      case 'contact':
        this.img = null;
        break;
      default: this.img = '/assets/img/' + tab.toLowerCase() + '.jpg';
    }
  }

  private setText(tab: string) {
    // Should be from db
    let text: string[];
    switch (tab) {
      case 'hosting': text = [
        'Hello, this is the text about hosting',
        'bla bla bla'
        ];
      break;
      case 'websites': text = [
        'Hello, this is the text about websites',
        'bla bla bla'
        ];
      break;
      case 'webapps': text = [
        'Hello, this is the text about webapps',
        'bla bla bla'
        ];
      break;
      case 'portfolio': this.portfolio = [
        {
          alias: 'aandevesten',
          name: 'Aan de Vesten',
          description: 'Dierenartsen website',
          url: 'http://www.aandevesten.be/'
        }, {
          alias: 'stadsverkenner',
          name: 'Stadsverkenner',
          description: 'Informatie website',
          url: 'http://www.stadsverkenner.com/'
        }, {
          alias: 'jazyk',
          name: 'Jazyk',
          description: 'Taalstudie webapp (u/c)'
        }];
      break;
    }
    this.text = text;
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}
