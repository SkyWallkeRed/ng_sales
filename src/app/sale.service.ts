import { Injectable } from '@angular/core';
import Customer from 'models/Customer';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/';
import { Observable } from 'rxjs/';
// import { Customer } from ('../../Data_Access/Customer');

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private Customers: Array<Customer>;

  public customerUpdate: Observable<Array<Customer>>;
  public customerSubject: Subject<Array<Customer>>;

  constructor(private http: HttpClient) {
    this.customerSubject = new Subject<Array<Customer>>();
    this.customerUpdate = this.customerSubject.asObservable();
    this.getCustomers();
  }

  getCustomers(): void {
    const objservble = this.http.get<Customer[]>('http://localhost:3000/customer/all');
    objservble.subscribe((res) => {
      this.Customers = res;
      this.customerSubject.next(this.Customers);
    });
  }
}


