import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { OverlayContainer } from "@angular/cdk/overlay";

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data, 
    private dialogRef: MatDialogRef<NewProjectComponent>,
    private oc: OverlayContainer
  ) { }

  ngOnInit() {
    const dark = this.data.dark ? "myapp-dark-theme" : null
    console.log(dark)
    this.oc.getContainerElement().classList.add(dark)
  }

  onClick() {
    this.dialogRef.close('received')
  }

}
