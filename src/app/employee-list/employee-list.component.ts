import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList : Employee[];

  constructor(private employeeService:EmployeeService) {
    this.employeeList = [];
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      result => {
        this.employeeList = result;
      }
    )
  }

}
