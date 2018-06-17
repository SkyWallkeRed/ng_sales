import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public alldata: Array<Object>;
  public route = 'all';
  public name: string;
  public allUpdate: Observable<Array<Object>>;
  public allSubject: Subject<Array<Object>>;

  constructor(private http: HttpClient, name: string) {
    this.name = name;
    this.getAll();
    this.allSubject = new Subject<Array<Object>>();
    this.allUpdate = this.allSubject.asObservable();
  }

  getAll(): void {
    const objservble = this.http.get<Object[]>(`${this.name}/${this.route}`);
    objservble.subscribe((res) => {
      this.alldata = res;
      this.allSubject.next(this.alldata);
    });
  }
  postOne(obj): void {
    const objservble = this.http.post(`${this.name}`, obj);
    objservble.subscribe((res) => {
      this.alldata.push(res);
      this.allSubject.next(this.alldata);
    });
  }
  delete(id) {
    const objservble = this.http.delete(`${this.name}/` + id);
    objservble.subscribe((res) => {
      this.getAll();
    });
  }
  edit(id, newObj) {
    const objservble = this.http.put(`${this.name}/` + id, newObj);
    objservble.subscribe((res) => {
      this.getAll();
      this.allSubject.next(this.alldata);
    });
  }

}





