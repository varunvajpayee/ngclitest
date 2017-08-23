import { Routes, RouterModule }  from '@angular/router';

import { ContactusComponent } from './contactus.component';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
  {
    path: 'contactus',
    component: ContactusComponent,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const ContactusRouting: ModuleWithProviders = RouterModule.forChild(routes);
