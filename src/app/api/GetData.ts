import {Category, UserComment, Post} from "./Objects";
import {HttpClient} from "@angular/common/http";
import {Get} from "./Requests";

export interface GetCategories{
  has_results:boolean;
  num_results?:boolean;
  results?:Array<Category>;
}

export class Categories{
  private server_url:string = "http://10.16.40.203:8080/get/bulk/";
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
  results?:Array<UserComment>;
}
export class Comments{
  private server_url:string = "http://10.16.40.203:8080/get/bulk/";
  constructor(public offset:number, public cat_id:number, public post_id:number,  public http:HttpClient, public parent_id?:number) {
  }
  async getComments():Promise<Array<UserComment> | undefined>{
    if(this.offset == 0){
      this.offset = 1;
    }
    let parent_piece:string = "";
    if(!(this.parent_id == undefined)){
      parent_piece = "/" + this.parent_id.toString();
    }
    this.offset = (this.offset - 1)*10;
    let request = this.offset.toString() + "/" + this.cat_id.toString() + "/" + this.post_id.toString() + parent_piece;
    let return_val:Array<UserComment> | undefined = undefined;
    let get_req:Get<GetComments> = new Get<GetComments>(this.server_url,request, this.http);
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
  private server_url:string = "http://10.16.40.203:8080/get/bulk/";
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

export interface GetPost{
  has_result:boolean;
  result?:Post,
}

export class SinglePost{
  private server_url:string = "http://10.16.40.203:8080/get/single/";
  constructor(public post_id:number, public http:HttpClient) {
  }
  async getComments():Promise<Post | undefined>{
    if(this.post_id == 0){
      this.post_id = 1;
    }
    let return_val:Post | undefined = undefined;
    let get_req:Get<GetPost> = new Get<GetPost>(this.server_url,this.post_id.toString(), this.http);
    await get_req.make_request().toPromise().then(r => {
      return_val = r.result;

    });
    return return_val;
  }
}
