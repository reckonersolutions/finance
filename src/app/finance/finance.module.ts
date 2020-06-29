import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './forms/accounts/accounts.component';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxMenuModule} from 'jqwidgets-ng/jqxmenu';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxDockingLayoutModule } from 'jqwidgets-ng/jqxdockinglayout';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { FinancedashboardComponent } from './financedashboard/financedashboard.component';



@NgModule({
  declarations: [
    AccountsComponent,
    FinancedashboardComponent
  ],
  imports: [
    CommonModule,
    jqxWindowModule,
    jqxButtonModule,
    jqxWindowModule,
    jqxMenuModule,
    jqxDockingLayoutModule,
    jqxInputModule
  ],
  exports: [
    FinancedashboardComponent,
    AccountsComponent
  ]
})
export class FinanceModule { }
