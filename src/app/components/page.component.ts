import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/takeWhile';

@Component({
  template: `
    <section>
      <div class="panel">
        PAGE {{tab}}
      </div>
    </section>
  `,
  styles: [`
    .panel {
      background-color: rgba(255, 255, 255, 0.1);
      min-height: 400px;
      margin-top: 24px;
      border: 2px solid white;
      border-radius: 6px;
      color: white;
      font-size: 26px;
      padding: 16px;
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
