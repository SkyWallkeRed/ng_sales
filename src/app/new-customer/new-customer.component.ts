import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import Company from 'models/Company';


@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {
  @Output() newCustomerData: EventEmitter<any> = new EventEmitter();
  @Input() customerToEdit;

  public newCustomer = false;
  private firstName: string;
  private lastName: string;
  private email: string;
  private phoneNumber: number;
  private companyID: number;
  constructor() { }

  ngOnInit() {
    console.log(this.customerToEdit);
  }
  submitAddCustomer() {
    // console.log(this.customerToEdit);
    const newCustomer = {
      // customer_id: null,
      FirstName: this.firstName,
      LastName: this.lastName,
      Email: this.email,
      Phone: this.phoneNumber,
      Company_id: this.companyID
    };
    this.newCustomerData.emit(newCustomer);
  }


}
