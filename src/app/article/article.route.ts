import { Routes, RouterModule }  from '@angular/router';

import { ArticleComponent } from './article.component';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
  { path: 'article', component: ArticleComponent, children: [   ]},
];

export const articleRouting: ModuleWithProviders = RouterModule.forChild(routes);
