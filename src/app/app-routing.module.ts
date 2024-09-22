import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterDocumentComponent } from './components/register-document/register-document.component';
import { ViewStatusComponent } from './components/view-status/view-status.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { Department1Component } from './components/departments/department1/department1.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'registerDocument', component: RegisterDocumentComponent},
  {path:'viewStatus', component: ViewStatusComponent},
  {path:'departments', component: DepartmentsComponent},
  {path:'departments/department1', component:Department1Component},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
