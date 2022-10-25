import { Component, OnInit } from '@angular/core';

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

  constructor() {
    // interpolation example
    this.tittle = 'Create an Account';
    
    // ngModel example
    this.userName = '';
    this.email = '';
    this.password = '';
  }

  createAccount(){
    // alert(this.userName) // test 2 way binding
    // alert(this.email) // test 2 way binding
    // alert(this.password) // test 2 way binding
  }

  ngOnInit(): void {}
}
