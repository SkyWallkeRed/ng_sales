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
// import { SaleService } from './services/sale.service';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { CustomerService } from './services/customer.service';
import { CompanyService } from './services/company.service';
import { CommentsService } from './services/comments.service';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import { DialogEndComponent } from './dialog-end/dialog-end.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    CompanyComponent,
    CustomerComponent,
    CommentsComponent,
    NewCustomerComponent,
    DialogComponent,
    DialogEndComponent,


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
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    MatDialogModule
  ],
  entryComponents: [
    DialogComponent, DialogEndComponent
  ],
  providers: [CustomerService, CompanyService, CommentsService, { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
