import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { AccountsComponent } from 'src/app/finance/forms/accounts/accounts.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  @ViewChild(AccountsComponent) accounts;
  window: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.window = this.accounts.window;
  }

  getWidth() : any {
		if (document.body.offsetWidth < 600) {
			return '90%';
		}
		
		return "99.9%";
  }

  onShowButton(): void {
    this.window.open();
    //console.log("Iam clicked");
  }

}
