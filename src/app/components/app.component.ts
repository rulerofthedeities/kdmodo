import { Component, OnInit } from '@angular/core';
import {theme} from '../app.config';

@Component({
  selector: 'kd-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  themes: string[];
  theme: string;
  video: string = null;
  image: string = null;
  speed = 0.6;

  ngOnInit() {
    this.themes = ['Moon', 'Pool', 'Trees', 'Heartbeat', 'Globe'];
    this.changeTheme(theme);
  }

  onChangeTheme(newTheme: string) {
    this.changeTheme(newTheme);
  }

  onResize(event) {
    this.changeTheme(this.theme);
  }

  private changeTheme(newTheme: string) {
    this.theme = newTheme.toLowerCase();

    if (window.innerWidth > 991) {
      this.video = '/assets/video/background-' + this.theme + '.mp4';
    } else {
      this.theme = 'moon';
      this.image = 'url(/assets/img/background/' + this.theme + '-991.jpg)';
      this.video = null;
    }
  }
}
