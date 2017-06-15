import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'kd-footer',
  template: `
  <section class="footer">
    <div class="pull-right">
      <address>&copy;{{year}} kd-modo.com</address>
    </div>
  </section>
  `,
  styles: [`
    .footer {
      color: #eee;
    }
  `]
})

export class FooterComponent implements OnInit {
  year: number;

  ngOnInit() {
    this.year = new Date().getFullYear();
  }
}
