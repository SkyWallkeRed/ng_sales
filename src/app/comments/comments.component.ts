import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  msgs: Message[] = [];
  public newCustomer = false;
  public customerToEdit;

  displayedColumns = ['ID', 'CUSTOMER', 'DATE', 'TEXT', 'ACTION'];
  dataSource: any;

  constructor(public commentsService: CommentsService, private messageService: MessageService) {

  }
  // tslint:disable-next-line:use-life-cycle-interface
  // ngOnDestroy() {
  //   this.commentsService.allSubject.unsubscribe();
  // }

  ngOnInit() {
    this.commentsService.allUpdate.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    // this.commentsService.getAll();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  cetchNewCustomer(newCustomerData) {
    this.commentsService.postOne(newCustomerData);
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
    this.commentsService.delete(id);
    this.showWarn();

  }
  submitEditCustomer(currentCustomerId, editCustomerData) {
    this.commentsService.edit(currentCustomerId, editCustomerData);
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


