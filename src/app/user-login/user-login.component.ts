import { Component, OnInit } from '@angular/core';
import {Login} from "../Login";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submitted:boolean = false;
  credentials:Login = new Login("", "");
  onSubmit() {this.submitted = true};
}
