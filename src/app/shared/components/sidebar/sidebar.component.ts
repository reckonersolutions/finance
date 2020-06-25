import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { FinancedashboardComponent} from 'src/app/finance/financedashboard/financedashboard.component'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  @ViewChild(FinancedashboardComponent) financeComp;
  finWindow: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.finWindow = this.financeComp.window;
  }

  onShowButton(): void {
    this.finWindow.open();      
    this.finWindow.focus();
    //console.log("Iam clicked");
  }

}
