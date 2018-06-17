import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
// import { CustomerService } from '../services/customer.service';
// import Customer from 'models/Customer';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { CompanyService } from '../services/company.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  msgs: Message[] = [];
  public newCustomer = false;
  public customerToEdit;

  displayedColumns = ['ID', 'NAME', 'ADRRESS', 'COUNTRY', 'ACTION'];
  dataSource: any;

  constructor(public companyService: CompanyService, private messageService: MessageService) {

  }

  ngOnInit() {
    this.companyService.allUpdate.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    // this.companyService.getAll();
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  cetchNewCustomer(newCustomerData) {
    console.log(this.newCustomer);
    this.companyService.postOne(newCustomerData);
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
    this.companyService.delete(id);
    this.showWarn();

  }
  submitEditCustomer(currentCustomerId, editCustomerData) {
    this.companyService.edit(currentCustomerId, editCustomerData);
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

