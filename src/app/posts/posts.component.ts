import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Categories, Posts} from "../api/GetData";
import {Category, Post} from "../api/Objects";
import {CategoryItemComponent} from "../category-item/category-item.component";
import {PostItemComponent} from "../post-item/post-item.component";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private  page:number = 1;
  private cat_id:number = 1;

  constructor(private route: ActivatedRoute, private router: Router,private resolver: ComponentFactoryResolver, private http:HttpClient) {}

  ngOnInit(): void {
    this.page = parseInt(this.route.snapshot.paramMap.get("page") ?? "0");
    this.cat_id = parseInt(this.route.snapshot.paramMap.get("cat_id") ?? "0");
    if(this.cat_id == 0){
      this.router.navigate(["/category/1/1"]).finally();
      return;
    }
    if(this.page == 0){
      this.router.navigate(["/category/" + this.cat_id.toString() + "/1"]).finally();
      return;
    }
    this.getPosts();
  }

  //adding new components
  @ViewChild('appendHere',{read : ViewContainerRef}) target: ViewContainerRef | undefined;
  private componentRef: ComponentRef<any> | undefined;

  getPosts(){
    let posts:Posts = new Posts(this.cat_id, this.page,this.http);
    let post_array:Array<Post> | undefined;
    posts.getPosts().then( r=>{
      post_array = r;
      if(post_array == undefined){
        this.page -= 1;
        this.router.navigate(["/category/" + this.cat_id.toString() + "/" + this.page.toString()]).finally();
        return;
      }
      for(let post of post_array){
        this.addPosts(post);
      }
    })


  }

  addPosts(post:Post) {
    let cf = this.resolver.resolveComponentFactory(PostItemComponent);
    this.componentRef = this.target?.createComponent(cf);
    if(this.componentRef == undefined){
      return;
    }
    this.componentRef.instance.post_id = post.post_id;
    this.componentRef.instance.post_content = post.content;
    this.componentRef.instance.post_name = post.name;
    this.componentRef.instance.cat_id = this.cat_id;
  }

}
