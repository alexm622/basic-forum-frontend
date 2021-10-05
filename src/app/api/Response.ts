export interface LoginResponse{
  outcome:boolean;
  login_token?:string;
  uid?:number;
}
export interface Exists{
  exists:boolean;
}

export interface SignupResponse{
  response_code:number,
  outcome:boolean,
  uid?: number,
  token?: string,
}
