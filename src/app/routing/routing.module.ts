import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { LoggedInGuard } from './loggedin.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoggedInGuard]},
  { path: 'login', component: LoginComponent },
  // otherwise
  { path: '**', component: LoginComponent }
];

export const routing = RouterModule.forRoot(routes);
