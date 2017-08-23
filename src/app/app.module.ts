import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {PageNotFoundComponent} from './not-found.component';

import {routing} from './app.routes'

import { LayoutModule} from './layout/layout.module';







@NgModule({
  declarations: [
    AppComponent,PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LayoutModule,
    routing
  ],
  providers: [
    // providers used to create fake backend
  //  fakeBackendProvider,
   // MockBackend,
    //BaseRequestOptions
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
