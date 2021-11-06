import { DefaultPageComponent } from './default-page/default-page.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [

  {
    path: 'employee_details',
    component: EmployeeListComponent
  },
  {
    path:'employee_details/:employeeId',
    component: EmployeeDetailComponent
  },
  {
    path: '**',
    component: DefaultPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
