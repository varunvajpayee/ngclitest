import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      // { path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const contactRouting: ModuleWithProviders = RouterModule.forChild(routes);
