import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private customer = false;
  private company = true;
  private comments = true;
  public navHeader;
  constructor() {

  }
  title = 'app';



  getClickedTab($event) {
    if ($event == 'company') {
      this.customer = true;
      this.company = false;
      this.comments = true;
      this.navHeader = 'Companys';
    } else if ($event == 'comments') {
      this.comments = false;
      this.company = true;
      this.customer = true;
      this.navHeader = 'Comments';
    } else if ($event == 'customer') {
      this.customer = false;
      this.comments = true;
      this.company = true;
      this.navHeader = 'Customers';
          } else {
      this.customer = false;
      this.comments = false;
      this.company = false;
      this.navHeader = 'All Tables';
          }
  }


}
