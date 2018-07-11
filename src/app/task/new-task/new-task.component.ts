import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  priorities = [
    {
      label: 'important',
      value: 2
    },
    {
      label: 'normal',
      value: 3
    },
    {
      label: 'emergency',
      value: 1
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
