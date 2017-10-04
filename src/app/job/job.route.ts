import { Routes, RouterModule }  from '@angular/router';

import { JobsComponent } from './job.component';
import { JobListComponent } from './joblist.component';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
  {    path: 'jobs',    component: JobsComponent  },
  {    path: 'jobList',    component: JobListComponent  }
];

export const JobsRouting: ModuleWithProviders = RouterModule.forChild(routes);
