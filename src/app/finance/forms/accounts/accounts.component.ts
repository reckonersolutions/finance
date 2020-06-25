import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-forms-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: [
    './accounts.component.scss',
    './../../finance.styles.scss'
  ]
})
export class AccountsComponent implements OnInit,AfterViewInit {

  @ViewChild('windowReference') window: jqxWindowComponent;

  height: number | string = 200;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    
  }

  closeWindow(): void{
    this.window.close();
  }

}
