import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  // interpolation example
  tittle: string;

  // ngModel example
  formUser = new UserModel();

  constructor() {
    // interpolation example
    this.tittle = 'Create an Account';
  }

  createAccount() {

    let user = new UserModel();
    // validate
    if (this.formUser.username.length == 0 || this.formUser.username.trim() == '') {
      alert('username cannot be empty');
      return;
    }

    if (this.formUser.email.length == 0 || this.formUser.email.trim() == '') {
      alert('email cannot be empty');
      return;
    }

    user.username = this.formUser.username;
    user.email = this.formUser.email;
    user.password = this.formUser.password;
  }

  ngOnInit(): void {}
}
