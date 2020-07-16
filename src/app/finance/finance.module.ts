import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './forms/accounts/accounts.component';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxMenuModule} from 'jqwidgets-ng/jqxmenu';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxDockingLayoutModule } from 'jqwidgets-ng/jqxdockinglayout';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxTabsModule } from 'jqwidgets-ng/jqxtabs';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
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
    jqxInputModule,
    jqxTabsModule,
    jqxComboBoxModule,
    jqxNumberInputModule,
    jqxDropDownListModule
  ],
  exports: [
    FinancedashboardComponent,
    AccountsComponent
  ]
})
export class FinanceModule { }
