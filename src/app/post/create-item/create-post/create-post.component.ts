import { Component, OnInit } from '@angular/core';
import {NewCat, NewCategory, NewPost, SendCat, SendPost} from "../../../api/SendData";
import {HttpClient} from "@angular/common/http";
import {BasicResponse} from "../../../api/Response";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  private readonly cat_id:number;

  constructor(public http:HttpClient, private router: Router,
              private route: ActivatedRoute) {


    this.cat_id = parseInt(this.route.snapshot.paramMap.get("cat_id") ?? "0");
    if(this.cat_id <= 0){
      this.router.navigate(['']).finally();
      return;
    }
  }

  public post_title:string = "";
  public cat_desc:string = "";
  public post_good:boolean = false;

  ngOnInit(): void {
  }



  submit() {
    let postObject:NewPost = {
      name: this.post_title,
      contents: this.cat_desc,
      cat: this.cat_id,
      user: Number.parseInt(localStorage.getItem("uid") ?? "0"),
      user_token: localStorage.getItem("token") ?? "none",
    }
    let cc:SendPost = new SendPost(postObject, this.http);
    let resp:BasicResponse | undefined;
    cc.send().then( r =>{
      resp = r;
      console.log("the value for the response is: " + r.response_code);
      if(r.redirect == undefined){
        this.router.navigate(['/content/c/1]).finally()']).finally();
      }else {
        this.router.navigate(['/content/c/' + this.cat_id + '/' + r.redirect]).finally();
      }
    })
  }
}
