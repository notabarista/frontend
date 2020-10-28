import { User } from './../classes/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  userLoginStatus: boolean //this variable is for route guard

  constructor(private http: HttpClient) { }

  // login service
  public authentication(user: User): Observable<any> {
    return this.http.post<any>("http://localhost:8080/login", user)
  }

  // user profile 
  public userProfile(user: User, username: string): Observable<any> {
    return this.http.get<any>("http://localhost:8080/profile/" + username)
  }
  // to chech user is logged in or not
  isUserLoggedIn() {
    var user = sessionStorage.getItem("authenticateUser")
    return !(user === null)
  }

  // user sign in service
  userSignIn(user: User): Observable<any> {
    return this.http.post<any>("http://localhost:8080/register", user)
  }


  //log out service
  logout() {
    // removign sessio storage
    sessionStorage.removeItem("authenticateUser")
  }
}
