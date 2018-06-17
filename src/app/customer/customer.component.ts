import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { MatTableDataSource } from '@angular/material';
import { CustomerService } from '../services/customer.service';
import Customer from 'models/Customer';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  msgs: Message[] = [];
  public newCustomer = false;
  public customerToEdit;

  displayedColumns = ['ID', 'EMAIL', 'FIRST NAME', 'LAST NAME', 'PHONE', 'COMPANY', 'ACTION'];
  dataSource: any;

  constructor(public customerService: CustomerService, private messageService: MessageService) {

  }

  ngOnInit() {
    this.customerService.allUpdate.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    // this.customerService.getAll();

  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  cetchNewCustomer(newCustomerData) {
    console.log(this.newCustomer);
    this.customerService.postOne(newCustomerData);
    this.showSuccess();
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
    this.showWarn();

  }
  submitEditCustomer(currentCustomerId, editCustomerData) {
    this.customerService.edit(currentCustomerId, editCustomerData);
    this.showInfo();
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success ', detail: 'Customer Added' });
  }
  showWarn() {
    this.msgs = [];
    this.msgs.push({ severity: 'warn', summary: 'Warn ', detail: 'Customer Was Deleted' });
  }
  showInfo() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Info ', detail: 'Customer Was Updated' });
  }
}
