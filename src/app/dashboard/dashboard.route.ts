import { Routes, RouterModule }  from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(routes);
