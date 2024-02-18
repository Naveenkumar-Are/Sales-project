import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[]= [
  new SalesPerson("Naveen","Kumar","naveen@1233",5000),
  new SalesPerson("Venkat","Reddy","Venkat@1233",3450),
  new SalesPerson("Rajesh","Nallamothu","Rajeh@1233",6700),
  new SalesPerson("Kalyan","K","kalyan@1233",8900),
  new SalesPerson("Hari","Krishna","Hari@1233",50)
]

  constructor() { }

  ngOnInit(): void {
  }

}
