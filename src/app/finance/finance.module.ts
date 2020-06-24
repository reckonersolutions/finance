import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './forms/accounts/accounts.component';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';



@NgModule({
  declarations: [
    AccountsComponent
  ],
  imports: [
    CommonModule,
    jqxWindowModule,
    jqxButtonModule
  ],
  exports: [
    AccountsComponent
  ]
})
export class FinanceModule { }
