import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {environment} from "../../environments/environment";
import {User} from "../user/user";


@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }

  login(model: User) {

    let headers: Headers = new Headers({'Content-Type': 'application/json'  });
    let options: RequestOptions = new RequestOptions({ headers: headers })

    return this.http.post(environment.server_url+'/loginUser', JSON.stringify(model),options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.properties.userId){
        //user.token store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
