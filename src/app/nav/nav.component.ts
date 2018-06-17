import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() clickedTab: EventEmitter<any> = new EventEmitter();
  @Input() navHeader = 'Customers';
  constructor() { }

  ngOnInit() {
  }
  menuClick(tab) {
    this.clickedTab.emit(tab);
  }


}
