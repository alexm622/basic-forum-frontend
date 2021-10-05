import {HttpClient} from "@angular/common/http";
import {Exists, LoginResponse, SignupResponse} from "./Response";
import {Get, LoginRequest, Post, SignupRequest} from "./Requests";

export class Signup {
  constructor(public http:HttpClient) {
  }
  private signup_url:string = "http://10.16.40.203:8080/newuser";
  private username_check:string = "http://10.16.40.203:8080/checkuname";
  private email_check:string = "http://10.16.40.203:8080/checkemail";


  public async signup(credentials:SignupRequest):Promise<SignupResponse>{
    let post_req:Post<SignupRequest,SignupResponse> = new Post<SignupRequest,SignupResponse>(this.signup_url,credentials,this.http);
    return await post_req.make_request().toPromise();
  }

  public async check_uname(uname:string){
    let args:string = "&uname=" + uname;
    let get_req:Get<Exists> = new Get<Exists>(this.username_check, args, this.http)
    return await get_req.make_request().toPromise();
  }
  public async check_email(email:string){
    let args:string = "&email=" + email;
    let get_req:Get<Exists> = new Get<Exists>(this.email_check, args, this.http)
    return await get_req.make_request().toPromise();
  }

  public static logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
  }
}

