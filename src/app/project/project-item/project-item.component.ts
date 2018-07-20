import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { cardAnim } from "../../anims/card.anim";

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
  animations: [ cardAnim ]
})
export class ProjectItemComponent implements OnInit {

  @Input()
  item: object
  @Output()
  onInvite = new EventEmitter<void>()
  @Output()
  onEdit = new EventEmitter<void>()
  @Output()
  onDelete = new EventEmitter<void>()
  @HostBinding('@card')
  cardState = 'out'
  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover'
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out'
  }

  constructor() { }

  ngOnInit() {
  }

  onInviteClick() {
    this.onInvite.emit()
  }

  onEditClick() {
    this.onEdit.emit()
  }

  onDeleteClick() {
    this.onDelete.emit()
  }

}
