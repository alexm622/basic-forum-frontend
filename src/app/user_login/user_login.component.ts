import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {NONE_TYPE} from "@angular/compiler";

import {config, Observable} from "rxjs";
import {catchError, retry} from "rxjs/operators";

import {LoginRequest, Post} from "../api/Requests";
import {LoginResponse} from "../api/Response";

@Component({
  selector: 'login',
  templateUrl: './user_login.component.html',
  styleUrls: ['./user_login.component.css']
})
export class User_loginComponent implements OnInit {

  constructor(private http: HttpClient) { }
  server_url:string = "http://127.0.0.1:8080/health"

  ngOnInit(): void {
  }
  submitted:boolean = false;
  credentials:LoginRequest = new LoginRequest("", "");
  login_resp:LoginResponse = new LoginResponse(false);
  onSubmit() {
    this.submitted = true;
  };
  post_req:Post<LoginRequest,LoginResponse> = new Post<LoginRequest,LoginResponse>(this.server_url,this.credentials,this.http);
  makeRequest(){
     this.post_req = new Post<LoginRequest,LoginResponse>(this.server_url,this.credentials,this.http);
     //this.post_req.make_request().subscribe(this.login_resp => .push(this.credentials));
    
  }


}
