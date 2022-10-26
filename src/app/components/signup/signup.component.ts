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
  userName: string;
  email: string;
  password: string;
  user = new UserModel();

  constructor() {
    // interpolation example
    this.tittle = 'Create an Account';

    // ngModel
    this.userName = '';
    this.email = '';
    this.password = '';
  }

  createAccount() {
    // validate
    if (this.userName.length == 0 || this.userName.trim() == '') {
      alert('username cannot be empty');
      return;
    }

    if (this.email.length == 0 || this.email.trim() == '') {
      alert('email cannot be empty');
      return;
    }


    this.user.userName = this.userName;
    this.user.email = this.email;
    this.user.password = this.password;

    console.log(this.user); // para ver cómo se comporta
    alert(this.user); // para ver cómo se comporta
  }

  ngOnInit(): void {}
}
