import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  items: string[]

  constructor() { }

  ngOnInit() {
    const num: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    this.items = num.map(n => `avatars:svg-${n}`)
  }

}
