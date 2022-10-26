import { Component, OnInit } from '@angular/core';
import { PersonModel } from 'src/app/models/PersonModel';

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
  person = new PersonModel();

  constructor() {
    // interpolation example
    this.tittle = 'Create an Account';

    // ngModel
    this.userName = '';
    this.email = '';
    this.password = '';
  }

  createAccount() {

    this.person.userName = this.userName;
    this.person.email = this.email;
    this.person.password = this.password;

    console.log(this.person); // para ver cómo se comporta
    alert(this.person);       // para ver cómo se comporta
  }

  ngOnInit(): void {}
}
