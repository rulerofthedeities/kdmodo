import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/takeWhile';

@Component({
  template: `<h1>PAGE {{tab}}</h1>
  `,
  styles: [`
    h1 {
      color: white;
    }
  `]
})

export class PageComponent implements OnInit, OnDestroy {
  private componentActive = true;
  tab: string;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route
    .data
    .takeWhile(() => this.componentActive)
    .subscribe(data => this.tab = data.tab);
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}
