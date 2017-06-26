import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

import {AuthenticationService} from '../service/authentication.service'
import {UserService} from '../service/user.service'

import {loginRouting} from './user.route';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    loginRouting
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [AuthenticationService,UserService]
})
export class UserModule { }
