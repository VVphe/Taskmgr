import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { OverlayContainer } from "@angular/cdk/overlay";

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  title: string = ''

  constructor(
    @Inject(MAT_DIALOG_DATA) private data, 
    private dialogRef: MatDialogRef<NewProjectComponent>
  ) { }

  ngOnInit() {
    // const dark = this.data.dark ? "myapp-dark-theme" : null
    // this.oc.getContainerElement().classList.add(dark)
    this.title = this.data.title
  }

  onClick() {
    this.dialogRef.close('received')
  }

}
