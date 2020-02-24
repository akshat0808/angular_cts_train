import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees=[]

  constructor(private empService : EmployeeService ) { }

  ngOnInit(): void {
    this.empService.getEmployees().subscribe(d=>this.employees=d.data)
  }

}
