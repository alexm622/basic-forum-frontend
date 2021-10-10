import {Component, EventEmitter, Inject, Output} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {LoginRequest} from "../../../api/Requests";
import {Login} from "../../../api/Login";
import {NewComment, SendComment} from "../../../api/SendData";
import {BasicResponse} from "../../../api/Response";

export interface Data{
  data:string;
}

@Component({
  template: ''
})
export class CreateCommentDialogComponent {
  @Output() loginEvent = new EventEmitter<boolean>();
  constructor(public dialog: MatDialog, private router: Router,
              private route: ActivatedRoute, public http:HttpClient) {
    this.post_id = parseInt(this.route.snapshot.paramMap.get("post_id") ?? "0");
    this.cat_id = parseInt(this.route.snapshot.paramMap.get("cat_id") ?? "0");
    this.parent = parseInt(this.route.snapshot.paramMap.get("parent_id") ?? "0");
    if(this.parent < 0 || this.post_id <= 0 || this.cat_id <= 0){
      this.router.navigate(['']).finally();
      return;
    }
    this.openDialog();
  }
  private readonly post_id:number;
  private readonly cat_id:number;
  private readonly parent:number ;

  comment:Data = {
    data: ""
  };

  openDialog(): void{
    const dialogRef = this.dialog.open(CommentDialog, {
      data: this.comment
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result?.data);
      let data:String | undefined = result?.data;
      if(data == undefined){
        return;
      }
      let uname:string | null = localStorage.getItem("uname");
      let token:string | null = localStorage.getItem("token");
      let uid:number | undefined = Number.parseInt(localStorage.getItem("uid") ?? "0");
      if(uid == 0 || uname == null || token == null){
        console.log("one of the user data pieces was not set");
        return;
      }
      let comment:NewComment = {
        parent:this.parent,
        post:this.post_id,
        cat_id:this.cat_id,
        contents: result.data,
        user: uid,
        user_token: token
      }

      let send:SendComment = new SendComment(comment,this.http);
      let resp:BasicResponse | undefined;
      send.send().then( r =>{
        resp = r;
        console.log("the value for the response is: " + r.response_code);
        this.router.navigate(['/content/p/' + this.cat_id + "/" + this.post_id]).finally();
      })

    })
  }
}

@Component({
  selector: 'app-comment-dialog',
  templateUrl: 'create-comment-dialog.component.html',

})
export class CommentDialog{
  int_data:Data;
  constructor(public dialogRef: MatDialogRef<CommentDialog>,
              @Inject(MAT_DIALOG_DATA) public data: Data) {this.int_data = data;}
  public loading:boolean = false;
  public buttonClose:boolean = false;
  onNoClick(){
    this.buttonClose = true;
    this.dialogRef.close();
  }
}

