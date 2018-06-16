import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { MatTableDataSource } from '@angular/material';
import { CustomerService } from '../services/customer.service';
import Customer from 'models/Customer';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  // @Output() customerToEditOutput: EventEmitter<any> = new EventEmitter();
  public newCustomer = false;
  public customerToEdit;

  displayedColumns = ['ID', 'EMAIL', 'FIRST NAME', 'LAST NAME', 'PHONE', 'COMPANY', 'ACTION'];
  // private _DATA: Array<Customer>;
  dataSource: any;

  constructor(public customerService: CustomerService) {

  }

  ngOnInit() {
    this.customerService.allUpdate.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });

  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  cetchNewCustomer(newCustomerData) {
    console.log(this.newCustomer);
    this.customerService.postOne(newCustomerData);
  }
  onClick() {
    if (this.newCustomer === false) {
      this.newCustomer = true;
    } else {
      this.newCustomer = false;
    }
  }
  submitDelete(id) {
    // console.log(id);
    this.customerService.delete(id);

  }
  submitEdit(customer) {
    this.newCustomer = true;
    this.customerToEdit = customer;
    // console.log(this.customerToEdit);
    // this.customerToEditOutput.emit(customer);
  }

}
