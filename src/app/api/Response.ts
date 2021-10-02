export class LoginResponse {
  constructor(public outcome:boolean, public login_token?:string, public uid?:number) {
  }
}
