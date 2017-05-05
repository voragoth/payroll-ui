import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PayrollService {

  constructor(private http: Http) { }

  getWages() {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('user', localStorage.getItem('user'));
    const options = new RequestOptions({ headers: headers });

    return this.http.get('http://7.125.100.37:8080/payroll/api/wages', options )
      .map((response: Response) => response.json());
  }

}
