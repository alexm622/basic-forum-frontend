import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from "@angular/material/dialog";
import {LoginRequest} from "../api/Requests";
import {Login} from "../api/Login";
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog, public http:HttpClient) { }

  credentials:LoginRequest = {uname:"", pw:""};

  ngOnInit(): void {
  }
  openDialog(): void{
    const dialogRef = this.dialog.open(LoginDialog, {
      width: '250px',
      data: this.credentials
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog closed");
      this.credentials.uname = result.uname;
      this.credentials.pw = result.pw;
      let login:Login = new Login(this.http)
      login.login(this.credentials).then(r => {
        console.log("user logged in");
      });
    })
  }

}
@Component({
  selector: 'login-dialog',
  templateUrl: 'login.dialog.html',

})
export class LoginDialog{
  int_data:LoginRequest;
  constructor(public dialogRef: MatDialogRef<LoginDialog>,
              @Inject(MAT_DIALOG_DATA) public data: LoginRequest) {this.int_data = data;}

  onNoClick(){
    this.dialogRef.close();
  }
}
