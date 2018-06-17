import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.scss']
})
export class PopComponent implements OnInit {
  display = false;
  @Output() newCustomerData: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  showDialog() {
    this.display = true;
  }
  cetchNewCustomer(newCustomerData) {
    this.display = false;
    // console.log(this.newCustomer);
    // this.customerService.postOne(newCustomerData);
    // this.showSuccess();
    this.newCustomerData.emit(newCustomerData);


  }
}





