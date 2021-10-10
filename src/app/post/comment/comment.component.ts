import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Comments} from "../../api/GetData";
import {UserComment} from "../../api/Objects";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Login} from "../../api/Login";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() cat_id:number = 0;
  @Input() post_id:number = 0;
  @Input() comment_id:number = 0;
  @Input() parent_id:number = 0;
  @Input() username:string = "";
  @Input() content:string = "";
  @Input() countdown:number = 5;
  @Input() creation_date:number = Date.now();
  public offset:number = 0;

  constructor(private route: ActivatedRoute, private router: Router,private resolver: ComponentFactoryResolver, private http:HttpClient) {}

  ngOnInit(): void {
    if(this.countdown == 0){
      return;
    }
    this.getComments();
  }

  @ViewChild('appendHere',{read : ViewContainerRef}) target: ViewContainerRef | undefined;
  private componentRef: ComponentRef<any> | undefined;
  collapsed: boolean = false;

  getComments(){
    let comments:Comments = new Comments(this.offset, this.cat_id, this.post_id,this.http, this.comment_id);
    let comment_array:Array<UserComment> | undefined;
    comments.getComments().then( r=>{
      comment_array = r;
      if(comment_array == undefined){
        return;
      }
      for(let comment of comment_array){
        this.addComments(comment);
      }
      this.offset += 1;
    })



  }

  addComments(comment:UserComment) {
    let cf = this.resolver.resolveComponentFactory(CommentComponent);
    this.componentRef = this.target?.createComponent(cf);
    if(this.componentRef == undefined){
      return;
    }

    this.componentRef.instance.post_id = this.post_id;
    this.componentRef.instance.cat_id = this.cat_id;
    this.componentRef.instance.comment_id = comment.comment_id;
    this.componentRef.instance.content = comment.content;
    this.componentRef.instance.username = comment.creator_id.toString();
    this.componentRef.instance.creation_date = comment.creation_date;
    this.componentRef.instance.countdown = this.countdown - 1;
    this.componentRef.instance.parent_id = this.comment_id;
  }
  loggedInCheck() {
    return Login.loggedInCheck();
  }

}
