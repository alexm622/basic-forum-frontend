import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Comments, Posts, SinglePost} from "../api/GetData";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Post, UserComment} from "../api/Objects";
import {PostItemComponent} from "../post-item/post-item.component";
import {CommentComponent} from "../comment/comment.component";
import {Login} from "../api/Login";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public post_name:string = "";
  public post_content:string = "";
  public post_user:string = "";
  public post_id:number = 1;
  public uid:number = 0;
  public cat_id:number = 1;
  public comment_offset:number = 0;


  constructor(private route: ActivatedRoute, private router: Router,private resolver: ComponentFactoryResolver, private http:HttpClient) {}

  ngOnInit(): void {
    this.post_id = parseInt(this.route.snapshot.paramMap.get("post_id") ?? "0");
    this.cat_id = parseInt(this.route.snapshot.paramMap.get("cat_id") ?? "0");
    if(this.post_id == 0){
      this.router.navigate(["/category/1/1"]).finally();
      return;
    }
    if(this.post_id == 0){
      this.router.navigate(["/category/" + this.cat_id.toString() + "/1"]).finally();
      return;
    }

    let sp:SinglePost = new SinglePost(this.post_id, this.http);
    let post:Post | undefined = undefined;
    sp.getComments().then(r =>{
      post = r;
      if(!(post == undefined)){
        this.post_id = post.post_id;
        this.post_name = post.name;
        this.post_user = post.creator_id.toString();
        this.uid = post.creator_id;
      }

    })

    this.getComments()
  }

  //adding new components
  @ViewChild('appendHere',{read : ViewContainerRef}) target: ViewContainerRef | undefined;
  private componentRef: ComponentRef<any> | undefined;

  getComments(){
    let comments:Comments = new Comments(this.comment_offset, this.cat_id, this.post_id,this.http);
    let comment_array:Array<UserComment> | undefined;
    comments.getComments().then( r=>{
      comment_array = r;
      if(comment_array == undefined){
        return;
      }
      for(let comment of comment_array){
        this.addComments(comment);
        this.comment_offset += 1;
      }
    })


  }

  addComments(comment:UserComment) {
    let cf = this.resolver.resolveComponentFactory(CommentComponent);
    this.componentRef = this.target?.createComponent(cf);
    if(this.componentRef == undefined){
      return;
    }
    /*
    cat_id:number = 0;
  @Input() post_id:number = 0;
  @Input() comment_id:number = 0;
  @Input() username:string = "";
  @Input() content:string = "";
  @Input() countdown:number = 5;
     */
    this.componentRef.instance.post_id = this.post_id;
    this.componentRef.instance.cat_id = this.cat_id;
    this.componentRef.instance.comment_id = comment.comment_id;
    this.componentRef.instance.content = comment.content;
    this.componentRef.instance.username = comment.creator_id.toString();
    this.componentRef.instance.creation_date = comment.creation_date;
  }

  loggedInCheck() {
    return Login.loggedInCheck();
  }
}
