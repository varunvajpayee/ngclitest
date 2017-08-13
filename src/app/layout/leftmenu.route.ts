import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {ModuleWithProviders} from '@angular/core';

export const layoutRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{
      path: '',
      loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
    }
      , {
        path: 'contact',
        loadChildren: 'app/contact/contact.module#ContactModule'
      }
      , {
        path: 'course',
        loadChildren: 'app/course/course.module#CourseModule'
      }

    ]
  },
];

export const layoutRouting: ModuleWithProviders = RouterModule.forChild(layoutRoutes);

