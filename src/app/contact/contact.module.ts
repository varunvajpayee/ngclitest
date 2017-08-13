import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {contactRouting} from './contact.route';
import { ContactComponent } from './contact.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    CommonModule,
    contactRouting,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
