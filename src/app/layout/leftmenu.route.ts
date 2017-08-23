import { Routes,RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {HeaderComponent} from './header.component';
import {ModuleWithProviders} from "@angular/core";
import {ContactusComponent} from "../contactus/contactus.component";


export const layoutRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[{
        path:'',
        loadChildren:'app/dashboard/dashboard.module#DashboardModule'
    },{
      path:'course',
      loadChildren:'app/course/course.module#CourseModule'
    }
    ]
  },
];

export const layoutRouting:ModuleWithProviders=RouterModule.forChild(layoutRoutes);

