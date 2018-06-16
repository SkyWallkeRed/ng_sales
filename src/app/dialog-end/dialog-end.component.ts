import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-dialog-end',
  templateUrl: './dialog-end.component.html',
  styleUrls: ['./dialog-end.component.scss']
})
export class DialogEndComponent {
  private firstName: string;
  private lastName: string;
  private email: string;
  private phoneNumber: number;
  private companyID: number;
  @Output() newCustomerData: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<DialogEndComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  submitAddCustomer() {
    const newCustomer = {
      // customer_id: null,
      FirstName: this.firstName,
      LastName: this.lastName,
      Email: this.email,
      Phone: this.phoneNumber,
      Company_id: this.companyID
    };
    // this.newCustomerData.emit(newCustomer);
    this.data = newCustomer;
    console.log(this.data);
  }

}
