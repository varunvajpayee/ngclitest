import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Article } from './article';
import { environment } from '../../environments/environment';
@Injectable()
export class ArticleService {

  constructor(private http: Http) { }

  getArticles() {
    return this.http.get(environment.api_url+"/forum/getForumTopics",{  })
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }

  getArticle(id) {
    return this.http.get(environment.api_url+"/forum/getForumTopic/" + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || "Server Error"));
  }

  saveArticle(article:Article) {

    if(localStorage.getItem('currentUser')){
     let userId=JSON.parse(localStorage.getItem('currentUser')).properties.userId;
      article.userName = JSON.parse(localStorage.getItem('currentUser')).properties.userName;;

      let headers: Headers = new Headers({'Content-Type': 'application/json'  });
      let options: RequestOptions = new RequestOptions({ headers: headers })

      return this.http.post(environment.api_url+"/forum/saveTopic", JSON.stringify(article),options)
        .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
        .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if an
    }
  }

}
