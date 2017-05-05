import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {routing} from './routing/routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PayrollService} from './_services/payroll.service';
import {UserService} from './_services/user.service';
import {LoggedInGuard} from './routing/loggedin.guard';
import {PayrollToolbarComponent} from './payroll-toolbar/payroll-toolbar.component';
import { PayrollDatePipe } from './_pipes/payroll-date.pipe';
import { SpinnerLoaderComponent } from './spinner-loader/spinner-loader.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    routing
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PayrollToolbarComponent,
    PayrollDatePipe,
    SpinnerLoaderComponent
  ],
  providers: [
    UserService,
    PayrollService,
    LoggedInGuard,
    { provide: LOCALE_ID, useValue: 'es-ES' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
