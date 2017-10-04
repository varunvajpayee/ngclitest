import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import {AlertService} from "app/service/alert.service";
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-discuss-article',
  templateUrl: './discuss-article.component.html'
})
export class DiscussArticleComponent implements OnInit {

  article: Article;
  article$: Observable<Article>;
  pageIdentifier:String;
  pageUrl:String;
  constructor(private articleService: ArticleService,
              private router: Router, private alertService: AlertService,private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.article$ = this.articleService.getArticle(id);
    this.article$.subscribe(
      article => {
        this.article = article;
      },
      err => {
        console.log(err);
      }
    );
    this.pageIdentifier = id;
    this.pageUrl = 'http://brightanalyst.com/#/article/discuss/'+id;
  }


}
