import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public model: Credentials = new Credentials('', '');
  public loading = false;
  public loadingMessage: string;
  public alert = false;
  public alertMessage: string;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }
  }

  ngOnInit() {
    this.loadingMessage = 'Validando Credenciales';
  }

  login() {
    this.loading = true;
    this.userService.login(this.model.user, this.model.password).subscribe(
      user => {
        if (user) {
          this.loadingMessage = 'Credenciales correctas';
          this.router.navigate(['dashboard']);
        } else {
          this.loadingMessage = 'ERROR!';
          this.loading = false;
          this.userService.logout();
          this.alert = true;
          this.alertMessage = 'Credenciales Incorrectas';
          this.loadingMessage = 'Validando Credenciales';
        }
      },
      error => {
        console.log('error de red');
      }
    );
  }

}

export class Credentials {
  constructor(
    public user: string,
    public password: string
  ) {  }
}
