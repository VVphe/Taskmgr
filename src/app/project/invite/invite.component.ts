import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

  items: object[] = [
    {
      id: 1,
      name: 'Vv',
    },
    {
      id: 2,
      name: 'Jj',
    },
    {
      id: 3,
      name: 'Ww',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  displayUser(user: {id: string; name: string;}) {
    return user ? user.name : ''
  }

}
