import { EmployeeService } from './../employee.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  sentToHome():void {
    this.router.navigate(['/employee_details']);
  }


}
