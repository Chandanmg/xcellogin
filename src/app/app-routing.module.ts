import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
// import { DashboardComponent } from './screens/dashboard/dashboard.component';


const routes: Routes = [
  { path: 'login', component: LoginScreenComponent },
  { path: 'dashboard', loadChildren: () => import('../app/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' } // For handling any other unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
