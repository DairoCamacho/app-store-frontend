import { Component, OnInit } from '@angular/core';
import { PersonModel } from 'src/app/models/PersonModel';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  // this is needed for ngModel on form fields
  formPerson = new PersonModel();

  // this is needed to create the person list table
  personList = new Array<PersonModel>();

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPersonsAll().subscribe((data) => {
      this.personList = Object.values(data);
    });
  }

  add() {
    
    this.formPerson.email = this.formPerson.email.toLowerCase();

    this.personService.createPerson(this.formPerson).subscribe((response) => {

      console.log(response);
      
      // it's necessary for update the person list
      this.personService.getPersonsAll().subscribe((data) => {
        this.personList = Object.values(data);
      });

    });

    alert('Created person: ' + this.formPerson.name);
  }
}
