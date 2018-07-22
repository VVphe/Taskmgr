import { Component, Inject } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { config } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  darkTheme: boolean = false

  constructor(private oc: OverlayContainer, @Inject('BASE_CONFIG') config) {

  }

  switchTheme(dark: boolean) {
    this.darkTheme = dark
    const d = dark ? "myapp-dark-theme" : null
    this.oc.getContainerElement().classList.add(d)
  }
}
