import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public name: string;

  constructor() {
    this.name = ""
   }

  send() {
    alert("el nombre digitado es: " + this.name)
  }
  ngOnInit(): void {
  }

}
