import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import 'hammerjs';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { CompanyComponent } from './company/company.component';
import { CustomerComponent } from './customer/customer.component';
import { CommentsComponent } from './comments/comments.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { SaleService } from './sale.service';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    CompanyComponent,
    CustomerComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [SaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
