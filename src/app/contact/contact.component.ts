import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  contactform = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  get name() {
    return this.contactform.get('name');
  }

  get email() {
    return this.contactform.get('email');
  }

  get subject() {
    return this.contactform.get('subject');
  }

  get message() {
    return this.contactform.get('message');
  }

  submitMessage() {

  }

}
