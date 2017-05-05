import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { PayrollService } from '../_services/payroll.service';
import {UserService} from "../_services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  wages: Array<Wage>;

  public loading = true;
  public loadingMessage = 'Cargando Liquidaciones';

  constructor(
    private router: Router,
    private payrollService: PayrollService,
    private userService: UserService) { }

  ngOnInit() {
    this.getWages();
  }

  getWages() {
    this.payrollService.getWages().subscribe(
      data => {
        this.loadingMessage = 'Liquidaciones obtenidas';
        this.wages = data;
        this.loading = false;
      },
      error => {
        setTimeout(function (this) {
          this.loadingMessage = 'Error al cargar las liquidaciones';
          this.userService.logout();
          this.router.navigate(['login']);
        }, 1000);
      }
    );
  }
}
export class Wage {
  constructor(
    date: string,
    periodicity: string,
    grossTaxable: string,
    grossPayExempt: string,
    legalDiscounts: string,
    otherDiscounts: string,
    netSalary: string,
    workedDays: string,
    licencedDays: string,
    pdfUrl: string
  ) {}
}
