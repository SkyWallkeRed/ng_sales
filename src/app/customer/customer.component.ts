import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SaleService } from '../sale.service';
import Customer from 'models/Customer';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  displayedColumns = ['ID', 'EMAIL', 'FIRST NAME', 'LAST NAME', 'IP ADDRESS', 'CREATED TIME'];
  // private _DATA: Array<Customer>;
  dataSource: any;

  constructor(public saleService: SaleService) {

  }

  ngOnInit() {
    this.saleService.customerUpdate.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });

  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
