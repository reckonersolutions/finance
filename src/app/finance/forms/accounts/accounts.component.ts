import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

@Component({
  selector: 'app-forms-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: [
    './accounts.component.scss',
    './../../finance.styles.scss'
  ]
})
export class AccountsComponent implements OnInit, AfterViewInit {

  @ViewChild('windowReference') window: jqxWindowComponent;

  height: number | string = 600;
  layout: any[] = this.generateLayout();

  Change(event: any): void {
        console.log(event.code);    
  }

  getLayoutWidth() : any {
		if (document.body.offsetWidth < 800) {
			return '90%';
		}
		
		return 800;
	}

  generateLayout(): any[] {
    let layout = 
    [
      {
        type: 'layoutGroup',
        orientation: 'horizontal',
        items: 
        [                                
          {
            type: 'autoHideGroup',
            alignment: 'right',
            width: 100,
            allowClose: false,
            unpinnedWidth: 700,            
            items:[
              {
                type: 'layoutPanel',
                title: 'Chart of Accounts',
                contentContainer: 'ChartPanel'
              },
              {
                type: 'layoutPanel',
                title: 'VAT Chart',
                contentContainer: 'VATPanel'
              },
              {
                type: 'layoutPanel',
                title: 'Help',
                contentContainer: 'HelpPanel'
              }
            ]
          }
        ]
      }  
    ];
    return layout;
  }

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    
  }

  getMenuWidth() : any {
		if (document.body.offsetWidth < 600) {
			return '90%';
		}
		
		return "99.9%";
  }

  closeWindow(): void{
    this.window.close();
  }

}
