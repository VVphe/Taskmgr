import { Component } from '@angular/core';
import { OverlayContainer } from '../../node_modules/@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  darkTheme: boolean = false

  constructor(private oc: OverlayContainer) {

  }

  switchTheme(dark: boolean) {
    this.darkTheme = dark
    const d = dark ? "myapp-dark-theme" : null
    this.oc.getContainerElement().classList.add(d)
  }
}
