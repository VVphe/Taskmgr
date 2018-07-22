import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.css']
})
export class TaskHeaderComponent implements OnInit {

  @Input()
  header = ''
  @Output()
  newTask = new EventEmitter<void>()
  @Output()
  moveAll = new EventEmitter<void>()
  @Output()
  delList = new EventEmitter<void>()
  @Output()
  editList = new EventEmitter<void>()

  constructor() { }

  ngOnInit() {
  }

  onNewTaskClick() {
    this.newTask.emit()
  }

  onDelListClick() {
    this.delList.emit()
  }

  onMoveAllClick() {
    this.moveAll.emit()
  }

  onEditListClick() {
    this.editList.emit()
  }

}
