import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonModel } from '../models/PersonModel';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  url = 'http://localhost:3000/persons';

  constructor(private http: HttpClient) { }

getPersonsAll() {
  return this.http.get(this.url);
}

createPerson( person : PersonModel ){
  return this.http.post(this.url, person)
}

}
