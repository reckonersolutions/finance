import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-forms-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  @ViewChild('windowReference') window: jqxWindowComponent;
  height: number | string = 200;

  constructor() { }

  ngOnInit(): void {
  }

  closeWindow(): void{
    this.window.close();
  }

}
