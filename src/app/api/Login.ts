import {HttpClient} from "@angular/common/http";
import {LoginResponse} from "./Response";
import {LoginRequest, Post} from "./Requests";

export class Login {
  constructor(public http:HttpClient) {
  }
  private server_url:string = "http://10.16.40.203:8080/login";

  public async login(credentials:LoginRequest):Promise<LoginResponse>{
    if(((credentials.pw ?? "none") == "none" )|| ((credentials.uname ?? "none") == "none")){
      return {login_token:"none", uid:0, outcome:false};
    }
    let post_req:Post<LoginRequest,LoginResponse>= new Post<LoginRequest,LoginResponse>(this.server_url,credentials,this.http);

    const t = await post_req.make_request().toPromise();
    console.log("token: " + t.login_token);
    localStorage.setItem("token", t.login_token ?? "none");
    localStorage.setItem("uid", t.uid?.toString() ?? "0");
    return t;

  }

  public static logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
  }
}

