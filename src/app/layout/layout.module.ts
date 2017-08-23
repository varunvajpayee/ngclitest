import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {layoutRouting} from './leftmenu.route';

import { HeaderComponent } from './header.component';
import { LayoutComponent } from './layout.component';
import { LeftmenuComponent } from './leftmenu.component';
import {ContactusModule} from "../contactus/contactus.module";
import {JobsModule} from "../job/job.module";
import {AlertComponent} from './alert.component';
import {DashboardModule} from '../dashboard/dashboard.module';
import {UserModule} from '../user/user.module';
import {ArticleModule} from '../article/article.module';
import {CourseModule} from '../course/course.module';

import {AlertService} from '../service/alert.service'

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    ArticleModule,
    CourseModule,
    UserModule,
    ContactusModule,
    JobsModule,
    layoutRouting,
  ],
  exports:[LayoutComponent],
  declarations: [HeaderComponent, LayoutComponent, LeftmenuComponent,AlertComponent],
  providers: [AlertService],
})
export class LayoutModule { }
