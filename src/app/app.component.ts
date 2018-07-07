import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  darkTheme: boolean = false

  switchTheme(dark: boolean) {
    console.log(dark)
    this.darkTheme = dark
  }
}
