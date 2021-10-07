import {Category, Comment, Post} from "./Objects";
import {HttpClient} from "@angular/common/http";
import {Get} from "./Requests";

export interface GetCategories{
  has_results:boolean;
  num_results?:boolean;
  results?:Array<Category>;
}

export class Categories{
  private server_url:string = "http://10.16.40.203:8080/get/";
  constructor(public offset:number, public http:HttpClient) {
  }
  async getCategories():Promise<Array<Category> | undefined>{
    if(this.offset <= 0){
      this.offset = 1;
    }
    this.offset = (this.offset - 1)*10;
    let return_val:Array<Category> | undefined = undefined;
    let get_req:Get<GetCategories> = new Get<GetCategories>(this.server_url,this.offset.toString(), this.http);
    await get_req.make_request().toPromise().then(r => {
      return_val = r.results;

    });
    return return_val;
  }
}

export interface GetComments{
  has_results:boolean;
  num_results?:boolean;
  results?:Array<Comment>;
}
export class Comments{
  private server_url:string = "http://10.16.40.203:8080/get/";
  constructor(public offset:number, public cat_id:number, public http:HttpClient) {
  }
  async getComments():Promise<Array<GetComments> | undefined>{
    if(this.offset == 0){
      this.offset = 1;
    }
    let return_val:Array<Comment> | undefined = undefined;
    let get_req:Get<GetComments> = new Get<GetComments>(this.server_url,this.offset.toString(), this.http);
    await get_req.make_request().toPromise().then(r => {
      return_val = r.results;

    });
    return return_val;
  }
}

export interface GetPosts{
  has_results:boolean;
  num_results?:boolean;
  results?:Array<Post>;
}
export class Posts{
  private server_url:string = "http://10.16.40.203:8080/get/";
  constructor(public offset:number, public cat_id:number, public http:HttpClient) {
  }
  async getPosts():Promise<Array<Post> | undefined>{
    if(this.offset == 0){
      this.offset = 1;
    }
    this.offset = (this.offset - 1)*10;
    let request = this.offset.toString() + "/" + this.cat_id.toString();
    let return_val:Array<Post> | undefined = undefined;
    let get_req:Get<GetPosts> = new Get<GetPosts>(this.server_url,request, this.http);
    await get_req.make_request().toPromise().then(r => {
      return_val = r.results;

    });
    return return_val;
  }
}
