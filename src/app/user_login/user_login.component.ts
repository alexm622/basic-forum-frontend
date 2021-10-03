import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


import {LoginRequest, Post} from "../api/Requests";
import {Login} from "../api/Login";
import {LoginResponse} from "../api/Response";

@Component({
  selector: 'login',
  templateUrl: './user_login.component.html',
  styleUrls: ['./user_login.component.css']
})
export class User_loginComponent implements OnInit {

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }
  submitted:boolean = false;
  outcome:boolean = false;
  credentials:LoginRequest = new LoginRequest("", "");
  onSubmit() {
    this.submitted = true;
  };
  async login(){
    let login:Login = new Login(this.http);
    let resp:LoginResponse = (await login.makeRequest(this.credentials));
    localStorage.setItem("token", resp.login_token ?? "none");
    localStorage.setItem("uid", resp.uid?.toString() ?? "0");
    this.outcome = resp.outcome;
  }




  token:string ="";
  id:number = 0;
  getStoredData(){
    this.token = localStorage.getItem("token") ?? "none";
    this.id  = Number.parseInt(localStorage.getItem("uid") ?? "0");
  }


}
