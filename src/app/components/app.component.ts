import { Component, OnInit } from '@angular/core';
import {version} from '../app.config';

@Component({
  selector: 'kd-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  version: string;

  ngOnInit() {
    this.version = version;
  }
}
