import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
@Injectable({
  providedIn: 'root'
})
export class CommentsService extends BaseService {
  constructor(http: HttpClient) {
    super(http, 'Comments');
    this.getAll();
  }

}

