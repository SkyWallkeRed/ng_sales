import { Injectable } from '@angular/core';
// import Customer from 'models/Customer';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private alldata: Array<Object>;
  public route = 'all';
  public name: string;
  public allUpdate: Observable<Array<Object>>;
  public allSubject: Subject<Array<Object>>;
  public oneUpdate: Observable<Array<Object>>;
  public oneSubject: Subject<Array<Object>>;


  constructor(private http: HttpClient, name: string) {
    this.name = name;
    this.getAll();
    this.allSubject = new Subject<Array<Object>>();
    this.allUpdate = this.allSubject.asObservable();
    this.oneSubject = new Subject<Array<Object>>();
    this.oneUpdate = this.oneSubject.asObservable();
  }

  getAll(): void {
    const objservble = this.http.get<Object[]>(`http://localhost:3000/${this.name}/${this.route}`);
    objservble.subscribe((res) => {
      this.alldata = res;
      this.allSubject.next(this.alldata);
    });
  }
  postOne(obj): void {
    const objservble = this.http.post(`http://localhost:3000/${this.name}`, obj);
    objservble.subscribe((res) => {
      this.alldata.push(res);
      this.allSubject.next(this.alldata);
    });
  }
  delete(id) {
    const objservble = this.http.delete(`http://localhost:3000/${this.name}/` + id);
    objservble.subscribe((res) => {
      this.getAll();
    });
  }
  edit(obj) {
    const objservble = this.http.put(`http://localhost:3000/${this.name}`, obj);
    objservble.subscribe((res) => {

    });
  }

}





