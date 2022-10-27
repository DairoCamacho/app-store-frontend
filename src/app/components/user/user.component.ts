import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  // this is needed for ngModel on form fields
  formUser = new UserModel();

  // this is needed to create the user list table
  userList = new Array<UserModel>();

  constructor( private userService : UserService ) {}

  ngOnInit(): void {

    this.userService.getUsersAll().subscribe( data => {
      this.userList = Object.values(data);
    })
  }

  add() {
    let user = new UserModel();

    user.id = this.formUser.id;
    user.name = this.formUser.name;
    user.lastName = this.formUser.lastName;
    user.phoneNumber = this.formUser.phoneNumber;
    user.username = this.formUser.username;
    user.email = this.formUser.email;
    user.password = this.formUser.password;

    this.userList.push(user);

    console.log(this.formUser);
    alert('Created user: ' + user.name);
  }
}
