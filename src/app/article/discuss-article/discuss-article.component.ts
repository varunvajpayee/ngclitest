import { Component, OnInit } from '@angular/core';
import { MarkdownParserService } from '../../service/markdown-parser.service';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import {AlertService} from "app/service/alert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss'],
  providers: [ MarkdownParserService,ArticleService ]
})
export class NewArticleComponent implements OnInit {

  convertedText: string;
  article: Article;
  pageIdentifier:String;
  pageUrl:String;
  constructor(private md: MarkdownParserService,private articleService: ArticleService,
              private router: Router, private alertService: AlertService) { }

  ngOnInit() {
    this.article = new Article();
    this.pageIdentifier = '12121';
    this.pageUrl = 'http://brightanalyst.com/#/article/new';
  }

  save(article: any) {
    console.log(article);
    this.articleService.saveArticle(article).subscribe(
      data => {
        console.log(data);
        this.alertService.success('Topic Posted', true);
        this.router.navigate(['/articles']);
      },
      error => {
        console.log(error);
      });
  }

  updateOutput(mdText: string) {
    this.convertedText = this.md.convert(mdText);
  }

}
