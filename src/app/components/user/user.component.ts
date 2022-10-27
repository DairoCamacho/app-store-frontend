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

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsersAll().subscribe((data) => {
      this.userList = Object.values(data);
    });
  }

  add() {
    
    this.formUser.email = this.formUser.email.toLowerCase();

    this.userService.createUser(this.formUser).subscribe((response) => {

      console.log(response);
      
      // it's necessary for update the user list
      this.userService.getUsersAll().subscribe((data) => {
        this.userList = Object.values(data);
      });

    });

    alert('Created user: ' + this.formUser.name);
  }
}
