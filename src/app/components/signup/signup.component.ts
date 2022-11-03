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
  formPerson = new PersonModel();

  constructor() {
    // interpolation example
    this.tittle = 'Create an Account';
  }

  createAccount() {

    let person = new PersonModel();
    // validate
    if (this.formPerson.email.length == 0 || this.formPerson.email.trim() == '') {
      alert('email cannot be empty');
      return;
    }

    person.email = this.formPerson.email;
    person.password = this.formPerson.password;
  }

  ngOnInit(): void {}
}
