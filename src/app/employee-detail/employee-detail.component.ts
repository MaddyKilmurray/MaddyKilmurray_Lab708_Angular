import { Employee } from './../models/employee.model';
import { EmployeeService } from './../employee.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee:Employee;
  deleted:boolean;

  constructor(private router:Router,
    private activatedRoute:ActivatedRoute,
    private employeeService:EmployeeService) { 
    this.employee = new Employee(0,'','',0,'',false,'');
    this.deleted = false;
  }

  ngOnInit(): void {
    const employeeId:number = this.activatedRoute.snapshot.params['employeeId'];

    this.employeeService.getEmployeeById(employeeId).subscribe(
      result => {
        this.employee = result;
      }
    )
  }

  remove() : void {
    this.employeeService.removeEmployee(this.employee.id);
    this.deleted = true;
  }

  sentToHome():void {
    this.router.navigate(['/employee_details']);
  }
}
