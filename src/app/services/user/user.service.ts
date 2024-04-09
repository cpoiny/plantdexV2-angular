import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  private baseUrlApi : string = 'http://localhost:8084/users';


login(email: string, password: string) {
  const url = this.baseUrlApi + "/login";
  console.log("my url", url);
  return this.http.post(url, {email, password});
}
}

