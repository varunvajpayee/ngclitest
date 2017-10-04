import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../user/user';
import {environment} from "../../environments/environment";

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  getAll() {
    return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }

 /* create(user: User) {
    return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
  }*/

  create(user: User) {

    let headers: Headers = new Headers({'Content-Type': 'application/json' });
    let options: RequestOptions = new RequestOptions({ headers: headers })

    return this.http.post(environment.server_url+'/saveUserObject', JSON.stringify(user),options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  update(user: User) {
    return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
