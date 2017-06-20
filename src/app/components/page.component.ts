import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/takeWhile';

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

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route
    .data
    .takeWhile(() => this.componentActive)
    .subscribe(data => this.setTab(data.tab));
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
    }
    this.text = text;
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}
