import {Component, EventEmitter, Inject, Output} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {LoginRequest} from "../../../api/Requests";
import {Login} from "../../../api/Login";

@Component({
  template: ''
})
export class CreateCommentDialogComponent {
  @Output() loginEvent = new EventEmitter<boolean>();
  constructor(public dialog: MatDialog, private router: Router,
              private route: ActivatedRoute, public http:HttpClient) {
    this.openDialog();
  }
  credentials:LoginRequest = {uname:"", pw:""};

  openDialog(): void{
    const dialogRef = this.dialog.open(CommentDialog, {
      width: '250px',
      data: this.credentials
    });
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['../'], { relativeTo: this.route }).finally();
      console.log("dialog closed");
      if(((result?.uname ?? "none") == "none") || ((result?.pw ?? "none") == "none")){
        return;
      }
      this.credentials.uname = result.uname ?? "none";
      this.credentials.pw = result.pw ?? "none";

      let login:Login = new Login(this.http)
      login.login(this.credentials).then(r => {
        console.log("login response received");
        if(!(localStorage.getItem("token") == "none")){
          localStorage.setItem("uname", this.credentials.uname);
          localStorage.setItem("token", r.login_token ?? "none");
          localStorage.setItem("uid", r.uid?.toString() ?? "0");
          this.loginEvent.emit(true);
        }else{
          this.loginEvent.emit(false);
        }
      });
    })
  }
}

@Component({
  selector: 'app-comment-dialog',
  templateUrl: 'create-comment-dialog.component.html',

})
export class CommentDialog{
  int_data:LoginRequest;
  constructor(public dialogRef: MatDialogRef<CommentDialog>,
              @Inject(MAT_DIALOG_DATA) public data: LoginRequest) {this.int_data = data;}

  onNoClick(){
    this.dialogRef.close();
  }
}

