import { Routes, RouterModule }  from '@angular/router';

import { Cfalevel3Component } from './cfalevel3.component';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
  {
    path: 'course/3',
    component: Cfalevel3Component,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const courseRouting: ModuleWithProviders = RouterModule.forChild(routes);
