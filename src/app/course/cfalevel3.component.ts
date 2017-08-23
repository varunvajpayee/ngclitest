import { Component, OnInit } from '@angular/core';
import {  SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import {environment} from "../../environments/environment";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cfalevel3',
  templateUrl: './cfalevel3.component.html',
  styleUrls: ['./cfalevel3.component.css']
})
export class Cfalevel3Component implements OnInit {
  loginId:string;
  iframeUrl:SafeResourceUrl;
  sanitizer:DomSanitizer;
  constructor(public sanitizerArg: DomSanitizer,private router: Router) {
    this.sanitizer = sanitizerArg;
  }

  ngOnInit() {
    if(localStorage.getItem('currentUser')){
      this.loginId=JSON.parse(localStorage.getItem('currentUser')).properties.userId;
    }

  /*  if(!this.loginId){
      this.router.navigate(['/login'], );
    }*/
    this.iframeUrl= this.sanitizer.bypassSecurityTrustResourceUrl(environment.iframe_url+'?login='+this.loginId);//this.sanitizer.bypassSecurityTrustUrl('https://1-dot-testscoreservice.appspot.com/index.html?login='+this.loginId).toString();
  }



}
