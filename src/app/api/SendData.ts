import {BasicResponse} from "./Response";
import {Post} from "./Requests";
import {HttpClient} from "@angular/common/http";

export interface NewCategory{
  name:string,
  desc:string,
  user:number,
  user_token:string
}
export class SendCat{
  constructor(public newCategory:NewCategory, public http:HttpClient) {
  }
  public response:BasicResponse | undefined = undefined;

  private url:string = "http://10.16.40.8080/newcategory";

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

  private url:string = "http://10.16.40.8080/newpost";

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

  private url:string = "http://10.16.40.8080/newcomment";

  async send():Promise<BasicResponse>{
    let post:Post<NewComment, BasicResponse> = new Post(this.url, this.comment, this.http);
    return await post.make_request().toPromise();
  }
}
