import { Component, OnInit, HostBinding } from '@angular/core';
import { NewProjectComponent } from "../new-project/new-project.component";
import { InviteComponent } from "../invite/invite.component";
import { MatDialog } from "@angular/material";
import { ComfirmDialogComponent } from '../../shared/comfirm-dialog/comfirm-dialog.component';
import { slideToRight } from '../../anims/router.anim';
import { listAnimation } from '../../anims/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  animations: [slideToRight, listAnimation]
})
export class ProjectListComponent implements OnInit {

  @HostBinding('@routeAnim') state;

  projects = [
    {
      id: 1,
      name: "企业协作平台",
      desc: "这是一个企业内部项目",
      coverImg: "assets/img/covers/1.jpg"
    },
    {
      id: 2,
      name: "企业协作平台",
      desc: "这是一个企业内部项目",
      coverImg: "assets/img/covers/3.jpg"
    },
    {id:3,name: 'A new project', desc:'A new project',coverImg: "assets/img/covers/8.jpg"}
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: "New Project"}})
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = [...this.projects, {id:3,name: 'A new project', desc:'A new project',coverImg: "assets/img/covers/8.jpg"}]
    })
  }

  inviteMembers() {
    this.dialog.open(InviteComponent)
  }

  editProject() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: "Edit Project"}})
  }

  deleteProject() {
    const dialogRef = this.dialog.open(ComfirmDialogComponent, {data: {title: "Delete Project", content: "Confirm?"}})
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // this.projects = this.projects.filter(p => p.id !== project.id)
    })
  }

}
