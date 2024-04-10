import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
    private http: HttpClient,
    private handleError : ErrorHandler
  ) {}

  private baseUrlApi : string = 'http://localhost:8084/users';


login(email: string, password: string): Observable<User>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'mon-jeton'
    })
  };
  
  const url = this.baseUrlApi + "/login";
  return this.http.post<User>(url, {email: email, password: password},httpOptions);

}
}

