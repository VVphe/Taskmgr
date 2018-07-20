import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { itemAnim } from '../../anims/item.anim';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  animations: [itemAnim]
})
export class TaskItemComponent implements OnInit {

  @Input()
  item
  @Input()
  avatar
  @Output()
  taskClick = new EventEmitter<void>()
  
  itemState = 'out'
  @HostListener('mouseenter')
  onMouseEnter() {
    this.itemState = 'in'
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.itemState = 'out'
  }

  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned'
  }

  onItemClick() {
    this.taskClick.emit()
  }

  onCheckboxClick(ev: Event) {
    ev.stopPropagation()
  }

}
