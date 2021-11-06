import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly baseUrl = "http://localhost:8200";

  constructor(private http:HttpClient) { }

  getEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + '/employee');
  }

  getEmployeeById(id:number) : Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + '/employee/' + id);
  }

  removeEmployee(id:number) : void {
    this.http.delete<Employee>(this.baseUrl + '/employee/' + id).subscribe(
      data => {
        console.log("deleted");
      }
    );
  }
}
