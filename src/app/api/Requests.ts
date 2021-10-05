import {Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'auth'
  })
};
export interface LoginRequest{
  uname: string;
  pw: string;
}

export interface SignupRequest{
  uname: string;
  pw: string;
  email: string;
}

export class Post<Type1, Type2>{
  constructor(public url:string, public data:Type1, public http:HttpClient) {
  }

  public make_request(): Observable<Type2>{
    return this.http.post<Type2>(this.url, this.data, httpOptions).pipe(catchError(Post.handleError));
  }

  private static handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
export class Get<Type2>{
  constructor(public url:string, public args_string:string, public http:HttpClient) {
  }
  public make_request(): Observable<Type2>{
    return this.http.get<Type2>(this.url + this.args_string).pipe();
  }
}
