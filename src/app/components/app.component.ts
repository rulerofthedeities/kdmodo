import { Component, OnInit } from '@angular/core';
import {theme} from '../app.config';

@Component({
  selector: 'kd-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  theme: string;

  ngOnInit() {
    this.theme = theme;
  }
}
