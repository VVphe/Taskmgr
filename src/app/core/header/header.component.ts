import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  toggle = new EventEmitter()

  @Output()
  toggleDarkTheme = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  openSidebar() {
    this.toggle.emit()
  }

  onChange(checked) {
    console.log(checked.checked)
    this.toggleDarkTheme.emit(checked.checked)
  }

}
