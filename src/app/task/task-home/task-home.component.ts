import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.css']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: 'todo',
      tasks: [
        {
          id: 1,
          desc: 'task 1',
          owner: {
            id: 1,
            name: 'Jj',
            avatar: 'avatar:svg-11'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: 'task 2',
          owner: {
            id: 1,
            name: 'Vv',
            avatar: 'avatar:svg-12'
          },
          dueDate: new Date()
        }
      ]
    },
    {
      id: 2,
      name: 'doing',
      tasks: [
        {
          id: 1,
          desc: 'task 3',
          owner: {
            id: 1,
            name: 'Ww',
            avatar: 'avatar:svg-9'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: 'task 4',
          owner: {
            id: 1,
            name: 'Vv',
            avatar: 'avatar:svg-12'
          },
          dueDate: new Date()
        }
      ]
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
