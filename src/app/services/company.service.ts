import { Injectable } from '@angular/core';
// import Customer from 'models/Customer';
import { HttpClient } from '@angular/common/http';
// import { Subject } from 'rxjs/';
// import { Observable } from 'rxjs/';
import { BaseService } from './base.service';
// import { Customer } from ('../../Data_Access/Customer');

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends BaseService {
  // private route = 'all';
  // private name = 'customer';


  constructor(http: HttpClient) {
    super(http, 'Company');

    // ------------------------  To Do  -----------------------------------------------######>>>>>>>>>.
    this.getAll();
    // on init query for full data VIA customer api full 'join' .
    // ------------------------  To Do  -----------------------------------------------######>>>>>>>>>.
  }

}


