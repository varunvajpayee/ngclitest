import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {PageNotFoundComponent} from './not-found.component';

import {routing} from './app.routes'

import { LayoutModule} from './layout/layout.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {CourseModule} from './course/course.module';
import {UserModule} from './user/user.module';

// used to create fake backend
import { fakeBackendProvider } from './helper/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LayoutModule,
    DashboardModule,
    CourseModule,
    UserModule,
    routing
  ],
  providers: [
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions],
  bootstrap: [AppComponent],

})
export class AppModule { }
