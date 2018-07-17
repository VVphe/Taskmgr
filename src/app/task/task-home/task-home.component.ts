import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '../../../../node_modules/@angular/material';
import { NewTaskComponent } from "../new-task/new-task.component";
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ComfirmDialogComponent } from '../../shared/comfirm-dialog/comfirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';

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
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: 'Jj',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: 'task 2',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: 'Vv',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
          reminder: new Date()
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
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: 'Ww',
            avatar: 'avatars:svg-9'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: 'task 4',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: 'Vv',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date()
        }
      ]
    },
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  addNewTastList() {
    const dialogRef = this.dialog.open(NewTaskComponent)
    // dialogRef.afterClosed().subscribe(result => console.log(result))
  }

  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}})
  }

  launchUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, {data :{title: 'Modify Task', task: task}})
  }

  launchDelListDialog() {
    const dialogRef = this.dialog.open(ComfirmDialogComponent, {data :{title: 'Delete List',content: 'Comfirm?'}})
  }

  addNewTastListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: 'New Task List'}})
    dialogRef.afterClosed().subscribe(result => console.log(result))
  }

  launchEditListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: 'Edit List Name'}})
    dialogRef.afterClosed().subscribe(result => console.log(result))
  }

}
