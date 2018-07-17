import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-comfirm-dialog',
  template: `
  <form>
    <h2 mat-dialog-title>{{title}}</h2>
    <div mat-dialog-content>
      {{content}}
    </div>
    <div mat-dialog-actions>
      <button type="button" mat-raised-button color="primary" (click)="onClick(true)">Yes</button>
      <button type="button" mat-button mat-dialog-close (click)="onClick(false)">No</button>
    </div>
  </form>

  `,
  styles: []
})
export class ComfirmDialogComponent implements OnInit {

  title = ''
  content = ''

  constructor(@Inject(MAT_DIALOG_DATA) private data ,private dialogRef: MatDialogRef<ComfirmDialogComponent>) { }

  ngOnInit() {
    this.title = this.data.title
    this.content = this.data.content
  }

  onClick(result: boolean) {
    this.dialogRef.close(result)
  }

}
