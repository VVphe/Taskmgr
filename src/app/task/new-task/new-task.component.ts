import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  title: string = ''


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

  constructor(@Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.title = this.data.title
    console.log(JSON.stringify(this.data.task))
  }

}
