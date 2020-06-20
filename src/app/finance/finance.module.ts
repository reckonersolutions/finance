import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FindashboardComponent} from 'src/app/finance/findashboard/findashboard.component';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';




@NgModule({
  declarations: [
    FindashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    jqxWindowModule,
    jqxButtonModule
  ]
})
export class FinanceModule { }
