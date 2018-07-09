import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  @Input()
  item: object
  @Output()
  onInvite = new EventEmitter<void>()

  constructor() { }

  ngOnInit() {
  }

  onInviteClick() {
    this.onInvite.emit()
  }

}
