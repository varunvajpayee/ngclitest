import { Component, OnInit } from '@angular/core';
import { MarkdownParserService } from '../../service/markdown-parser.service';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss'],
  providers: [ MarkdownParserService,ArticleService ]
})
export class NewArticleComponent implements OnInit {

  convertedText: string;
  article: Article;

  constructor(private md: MarkdownParserService,private articleService: ArticleService) { }

  ngOnInit() {
    this.article = new Article();
  }

  save(article: any) {
    console.log(article);
    this.articleService.saveArticle(article);
  }

  updateOutput(mdText: string) {
    this.convertedText = this.md.convert(mdText);
  }

}
