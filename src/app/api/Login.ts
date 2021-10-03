import {HttpClient} from "@angular/common/http";
import {LoginResponse} from "./Response";
import {LoginRequest, Post} from "./Requests";

export class Login {
  constructor(public http:HttpClient) {
  }
  private server_url:string = "http://10.16.40.203:8080/login";
  public login_resp:LoginResponse = new LoginResponse(false);
  private post_req:Post<LoginRequest,LoginResponse> = new Post<LoginRequest,LoginResponse>(this.server_url,new LoginRequest("",""),this.http);

  public async makeRequest(credentials:LoginRequest):Promise<LoginResponse>{
    this.post_req = new Post<LoginRequest,LoginResponse>(this.server_url,credentials,this.http);

    const t = await this.post_req.make_request().toPromise();
    this.login_resp.login_token = t.login_token;
    this.login_resp.uid = t.uid;
    this.login_resp.outcome = t.outcome;
    console.log("token: " + this.login_resp.login_token);

    return t;

  }
  public static logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
  }
}
