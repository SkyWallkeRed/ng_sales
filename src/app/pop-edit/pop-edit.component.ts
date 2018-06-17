import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pop-edit',
  templateUrl: './pop-edit.component.html',
  styleUrls: ['./pop-edit.component.scss']
})
export class PopEditComponent implements OnInit {
  display = false;
  @Output() editCustomerData: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  showDialog() {
    this.display = true;
  }
  cetchNewCustomer(newCustomerData) {
    // console.log(newCustomerData);
    this.display = false;
    // console.log(this.newCustomer);
    // this.customerService.postOne(newCustomerData);
    // this.showSuccess();
    this.editCustomerData.emit(newCustomerData);


  }
}

