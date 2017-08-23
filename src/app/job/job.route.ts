import { Routes, RouterModule }  from '@angular/router';

import { JobsComponent } from './job.component';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
  {
    path: 'jobs',
    component: JobsComponent,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const JobsRouting: ModuleWithProviders = RouterModule.forChild(routes);
