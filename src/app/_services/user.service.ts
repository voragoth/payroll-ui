import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private loggedIn = false;
  private user: string;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('user');
  }

  login(username: string, password: string) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ user: username, password: password });
    const options = new RequestOptions({ headers: headers });
    const loginUrl = 'http://7.125.100.37:8080/payroll/api/login';

    return this.http.post(loginUrl, body, options)
      .map(
        res => res.json()
      )
      .map((res) => {
      console.log('ok');
        if (res.user) {
          localStorage.setItem('user', res.user);
          this.loggedIn = true;
        }
        return res.user;
      });
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem('user');
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
