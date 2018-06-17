import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
// import creatCsvFile from './';
// downloadFile, detectionClientType
@Component({
  selector: 'app-export-to-cvs',
  templateUrl: './export-to-cvs.component.html',
  styleUrls: ['./export-to-cvs.component.scss']
})
export class ExportToCvsComponent implements OnInit {
  private customerObj;
  private companysObj;
  private commentsObj;
  constructor(public customerService: CustomerService) { }

  ngOnInit() {
    const objservble = this.customerService.allUpdate.subscribe((data) => {
      this.customerObj = data;
    });

  }

  DownloadJSON2CSV(objArray) {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';

    for (let i = 0; i < array.length; i++) {
      let line = '';
      for (const index in array[i]) {
        if (line !== '') {
          line += ',',

            line += array[i][index];
        }
      }

      str += line + '\r\n';
    }

    if (navigator.appName !== 'Microsoft Internet Explorer') {
      window.open('data:text/csv;charset=utf-8,' + escape(str));
    } else {
      const popup = window.open('', 'csv', '');
      popup.document.body.innerHTML = '<pre>' + str + '</pre>';
    }
  }
  download() {
    console.log(this.customerObj)
    this.DownloadJSON2CSV(this.customerObj);
  }
}
