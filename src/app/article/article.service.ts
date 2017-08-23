import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Article } from './article';
import { environment } from '../../environments/environment';
@Injectable()
export class ArticleService {

  constructor(private http: Http) { }

  getArticles() {
    return this.http.get("http://localhost/api/lessons",{ withCredentials: true })
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }

  getArticle(id) {
    return this.http.get("http://localhost/api/lesson/" + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || "Server Error"));
  }

  saveArticle(article:Article) {
    let bodyString = JSON.parse(JSON.stringify(article)); // Stringify payload
    let headers = new Headers([{ 'Content-Type': 'application/json' }]);
    let options = new RequestOptions({ headers: headers,withCredentials: true  }); // Create a request option

    return this.http.post(environment.api_url+"/forum/saveTopic",bodyString,options)
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if an
  }

}
