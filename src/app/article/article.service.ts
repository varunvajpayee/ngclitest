import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Article } from './article';

@Injectable()
export class ArticleService {

  constructor(private http: Http) { }

  getArticles() {
    return this.http.get("http://localhost:8000/api/lessons")
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }

  getArticle(id) {
    return this.http.get("http://localhost:8000/api/lesson/" + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || "Server Error"));
  }

  saveArticle(article:Article) {
    let bodyString = JSON.parse(JSON.stringify(article)); // Stringify payload
    let headers = new Headers([{ 'Content-Type': 'application/json' }]);//,{ 'Access-Control-Allow-Origin': '*' },{ 'Access-Control-Allow-Method': 'GET, POST, PATCH, PUT, DELETE, OPTIONS' },{ 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token' }]); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post("http://localhost:80/forum/saveTopic",bodyString,options)
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

}
