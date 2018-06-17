import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { CompanyService } from '../services/company.service';
import { CommentsService } from '../services/comments.service';


@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss']
})
export class Chart2Component implements OnInit {

  data: any;
  private customers;
  private company;
  private comments;
  constructor(
    private customerService: CustomerService,
    private companyService: CompanyService,
    private commentsService: CommentsService) {


    this.data = {
      datasets: [{
        data: [
          0,
          0,
          0,
          // 3,
          // 1
        ],
        backgroundColor: [
          '#FF6384',
          '#4BC0C0',
          '#FFCE56',
          // '#E7E9ED',
          // '#36A2EB'
        ],
        label: 'My dataset'
      }],
      labels: [
        'Customer',
        'Company',
        'Comments',
        // 'Grey',
        // 'Blue'
      ]
    };

  }
  ngOnInit() {
    const objsCustomer = this.customerService.allUpdate.subscribe((all) => {
      // debugger
      this.customers = all;
      this.data.datasets[0].data[0] = this.customers.length;
    });
    const objsCompany = this.companyService.allUpdate.subscribe((all) => {
      this.company = all;
      this.data.datasets[0].data[1] = this.company.length;
    });
    const objComments = this.commentsService.allUpdate.subscribe((all) => {
      this.company = all;
      this.data.datasets[0].data[2] = this.comments.length;
    });
  }



}
