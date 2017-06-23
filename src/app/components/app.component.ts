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
  video: string;

  ngOnInit() {
    this.themes = ['Moon', 'Pool', 'Trees'];
    this.changeTheme(theme);
  }

  onChangeTheme(newTheme: string) {
    this.changeTheme(newTheme);
  }

  private changeTheme(newTheme: string) {
    this.theme = newTheme.toLowerCase();
    this.video = '/assets/video/background-' + this.theme + '.mp4';
  }
}
