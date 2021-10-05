import { Component, OnInit } from '@angular/core';
import {NgModel} from "@angular/forms";
import {Signup} from "../api/Signup";
import {HttpClient} from "@angular/common/http";
import {SignupRequest} from "../api/Requests";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'registration';
  public email_address:string = "";
  public pass1_valid:boolean = false;
  public pass1_used:boolean = false;
  public pass2_valid:boolean = false;
  public pass2_used:boolean = false;
  public username_used:boolean = false;
  public username_valid:boolean = false;
  public email_good:boolean = false;
  private pw:string = "";
  private uname:string = "";
  public s:Signup;
    constructor( public http:HttpClient, private router: Router) {
      this.s = new Signup(this.http);
    }

  ngOnInit(): void {
  }

  signup(){
    let credentials:SignupRequest = {
      uname: this.uname,
      pw: this.pw,
      email: this.email_address
    };

    this.s.signup(credentials).then(r =>{
      localStorage.setItem("token", r.token ?? "none");
      localStorage.setItem("uid", (r.uid?.toString() ?? "0"));
      localStorage.setItem("uname", r.outcome? this.uname : "none");
      if(r.outcome){
        this.router.navigate(['']).finally();
      }
    })


  }


  password1_update(password1:string, password2:string){
    if(!this.pass1_used){
      this.pass1_used = true;
    }
    this.password_test(password1, password2)

  }

  password2_update(password1:string, password2:string){
    if(!this.pass2_used){
      this.pass2_used = true;
    }
    this.password_test(password1,password2)
  }

  password_test(password1:string, password2:string){

    this.pass1_valid = password1.length >= 8;
    //calculate the complexity
    let complexity:number = RegisterComponent.measureStrength(password1);
    //complexity must have a score of 4
    if(complexity != 4 && this.pass1_valid){
      this.pass1_valid = false;
    }
    //if the passwords do not match
    if(password1 == password2){
      this.pass2_valid = true;
    }
    if(this.pass1_valid && this.pass2_valid){
      this.pw = password1;
    }
  }

  private static measureStrength(pass: string):number{
    let digits:boolean = /\d/.test(pass);
    let lower:boolean =  /[a-z]/.test(pass);
    let upper:boolean = /[A-Z]/.test(pass);
    let nonWords:boolean = /\W/.test(pass);

    let variationCount = 0;
    variationCount += digits ? 1 : 0;
    variationCount += lower ? 1 : 0;
    variationCount += upper ? 1 : 0;
    variationCount += nonWords ? 1 : 0;
    return variationCount;
  }

  username_changed(username:string){
    if(!this.username_used){
      this.username_used = true;
    }
    //check username
    console.log("username: " + username)
    this.s.check_uname(username).then( r =>{
      this.username_valid = !r.exists && username.length > 6;
    })
    this.uname = username;

  }

  email_changed(emailref: NgModel){
      this.s.check_email(this.email_address).then( r =>{
        this.email_good = !r.exists && (emailref.valid ?? false);
      })
  }

}
