import {BasicResponse, Exists} from "./Response";
import {Get, Post} from "./Requests";
import {HttpClient} from "@angular/common/http";

export interface NewCategory{
  name:string,
  desc:string,
  user:number,
  user_token:string
}
export class NewCat{
  constructor(public http:HttpClient) {


  }

  private cat_check:string = "http://10.16.40.203:8080/checkcat"
  public async check_cat(cat:string):Promise<Exists>{

    let args:string = "&cat=" + ((cat.replace(" ","") == "")? "none" : cat);
    if(args == "&cat=none"){
      return {exists:true};
    }
    let get_req:Get<Exists> = new Get<Exists>(this.cat_check, args, this.http)
    return await get_req.make_request().toPromise();
  }
}

export class SendCat{
  constructor(public newCategory:NewCategory, public http:HttpClient) {
  }
  public response:BasicResponse | undefined = undefined;

  private url:string = "http://10.16.40.203:8080/newcategory";

  async send():Promise<BasicResponse>{
    let post:Post<NewCategory, BasicResponse> = new Post(this.url, this.newCategory, this.http);
    return await post.make_request().toPromise();
  }
}

export interface NewPost{
  cat:number,
  name:string,
  contents:string,
  user: number;
  user_token:string;
}
export class SendPost{
  constructor(public newPost:NewPost, public http:HttpClient) {
  }
  public response:BasicResponse | undefined = undefined;

  private url:string = "http://10.16.40.203:8080/newpost";

  async send():Promise<BasicResponse>{
    let post:Post<NewPost, BasicResponse> = new Post(this.url, this.newPost, this.http);
    return await post.make_request().toPromise();
  }
}

export interface NewComment {
  parent:number,
  post:number,
  cat_id:number,
  contents: string,
  user: number,
  user_token: string
}
export class SendComment{
  constructor(public comment:NewComment, public http:HttpClient) {
  }
  public response:BasicResponse | undefined = undefined;

  private url:string = "http://10.16.40.203:8080/newcomment";

  async send():Promise<BasicResponse>{
    let post:Post<NewComment, BasicResponse> = new Post(this.url, this.comment, this.http);
    return await post.make_request().toPromise();
  }
}
