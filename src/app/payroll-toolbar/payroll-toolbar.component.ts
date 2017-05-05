import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-payroll-toolbar',
  templateUrl: './payroll-toolbar.component.html',
  styleUrls: ['./payroll-toolbar.component.css']
})
export class PayrollToolbarComponent implements OnInit {

  public isNavbarCollapsed = true;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  showToolbar() {
    return this.userService.isLoggedIn();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['login']);
  }
}
