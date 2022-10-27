import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

getUsersAll() {
  return this.http.get(this.url);
}

createUser( user : UserModel ){
  return this.http.post(this.url, user)
}

}
