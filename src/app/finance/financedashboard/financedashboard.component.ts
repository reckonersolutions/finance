import { Component, ViewChild, AfterViewInit, OnInit, ElementRef } from '@angular/core';
import { AccountsComponent } from 'src/app/finance/forms/accounts/accounts.component';
import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-finance-dashboard',
  templateUrl: './financedashboard.component.html',
  styleUrls: [
    './financedashboard.component.scss',
    './../finance.styles.scss'
  ]
})
export class FinancedashboardComponent implements OnInit {

  @ViewChild('windowReference') window: jqxWindowComponent;
  @ViewChild(AccountsComponent) accountsComp;
  accountsWindow: any;

  constructor() { }

  ngOnInit(): void {
  }

  getMenuWidth() : any {
		if (document.body.offsetWidth < 600) {
			return '90%';
		}
		
		return "99.9%";
  }

  ngAfterViewInit(): void {
    let offsetLeft = document.body.offsetLeft;
    let offsetTop = document.body.offsetTop;
    this.window.position({ x: offsetLeft + 50, y: offsetTop + 75 });
    this.window.focus();

    this.accountsWindow = this.accountsComp.window;
  }

  getMaxWidth() : any {
    return document.body.offsetWidth;
  }

  getMaxHeight(): any {
    return document.body.offsetHeight;
  }

  onShowButton(): void {
    this.accountsWindow.open();
    this.accountsWindow.bringToFront();
    this.accountsWindow.focus();
    //console.log("Iam clicked");
  }

  closeWindow(): void{
    this.window.close();
  }

}
