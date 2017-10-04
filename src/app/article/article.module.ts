import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { DiscussArticleComponent } from './discuss-article/discuss-article.component';
import { ArticleService } from './article.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DisqusModule } from 'angular2-disqus';

export const articleRoutes: Routes = [
  { path: 'articles', component: ArticleComponent },
  { path: 'article/new', component: NewArticleComponent },
  { path: 'article/discuss/:id', component: DiscussArticleComponent }
]

@NgModule({
  imports: [
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    DisqusModule,
    RouterModule.forChild(articleRoutes)
  ],
  declarations: [
    ArticleComponent,
    NewArticleComponent,
    DiscussArticleComponent
  ],
  providers: [
    ArticleService
  ]
})
export class ArticleModule { }
