import { Component, OnInit } from '@angular/core';
import { NewProjectComponent } from "../new-project/new-project.component";
import { InviteComponent } from "../invite/invite.component";
import { MatDialog } from "@angular/material";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: object[] = [
    {
      name: "企业协作平台",
      desc: "这是一个企业内部项目",
      coverImg: "assets/img/covers/1.jpg"
    },
    {
      name: "企业协作平台",
      desc: "这是一个企业内部项目",
      coverImg: "assets/img/covers/3.jpg"
    },
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {dark: true}})
    dialogRef.afterClosed().subscribe(result => console.log(result))
  }

  inviteMembers() {
    this.dialog.open(InviteComponent)
  }

}
