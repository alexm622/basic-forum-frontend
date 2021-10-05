import {HttpClient} from "@angular/common/http";
import {LoginResponse} from "./Response";
import {LoginRequest, Post} from "./Requests";

export class Signup {
  constructor(public http:HttpClient) {
  }
  private server_url:string = "http://10.16.40.203:8080/signup";
  public login_resp:LoginResponse = new LoginResponse(false);
  private post_req:Post<LoginRequest,LoginResponse> = new Post<LoginRequest,LoginResponse>(this.server_url, {uname:"", pw:""},this.http);

  public async login(credentials:LoginRequest):Promise<LoginResponse>{
    this.post_req = new Post<LoginRequest,LoginResponse>(this.server_url,credentials,this.http);

    const t = await this.post_req.make_request().toPromise();
    this.login_resp.login_token = t.login_token;
    this.login_resp.uid = t.uid;
    this.login_resp.outcome = t.outcome;
    console.log("token: " + this.login_resp.login_token);
    localStorage.setItem("token", this.login_resp.login_token ?? "none");
    localStorage.setItem("uid", this.login_resp.uid?.toString() ?? "0");
    return t;

  }

  public static logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
  }
}

