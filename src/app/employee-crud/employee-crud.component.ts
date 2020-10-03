import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-employee-crud]',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCrudComponent {

  constructor() { }
  employees = [
    {
      "empid": 1234,
      "name" : "rohith",
      "email": "rohithsai209@gmail.com",
      "Designation" : "PAT",
      "Company" : "Cognizant"
    },
    {
      "empid": 1243,
      "name" : "sandhya",
      "email": "govindusandy99@gmail.com",
      "Designation" : "PAT",
      "Company" : "Cognizant"
    },
    {
      "empid": 1423,
      "name" : "sashank",
      "email": "chavalysashank@gmail.com",
      "Designation" : "PAT",
      "Company" : "Cognizant"
    },
    {
      "empid": 1432,
      "name" : "Pritam",
      "email": "pritamchatterjee@gmail.com",
      "Designation" : "PAT",
      "Company" : "Cognizant"
    },
    {
      "empid": 2143,
      "name" : "Lakshmi Narayana",
      "email": "gln@gmail.com",
      "Designation" : "PAT",
      "Company" : "Cognizant"
    },
    {
      "empid": 1453,
      "name" : "Sai Ram",
      "email": "sairammovva@gmail.com",
      "Designation" : "PAT",
      "Company" : "Cognizant"
    },
    {
      "empid": 1435,
      "name" : "Delfia Ghosh",
      "email": "ghoshdelfia@gmail.com",
      "Designation" : "PAT",
      "Company" : "Cognizant"
    }
  ];
onDelete(employee) {
  let index = this.employees.indexOf(employee);
  this.employees.splice(index,1);
}

}
