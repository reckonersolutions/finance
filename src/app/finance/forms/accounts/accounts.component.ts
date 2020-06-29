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

  height: number | string = 600;
  layout: any[] = this.generateLayout();

  getLayoutWidth() : any {
		if (document.body.offsetWidth < 800) {
			return '90%';
		}
		
		return 800;
	}

  generateLayout(): any[] {
    let layout = [
      {
        type: 'layoutGroup',
        orientation: 'horizontal',
        items: [
          {
            type: 'documentGroup',
            width: 700,
            items:[
              {
                type: 'documentPanel',
                title: 'General',
                contentContainer: 'Document1Panel'
              },
              {
                type: 'documentPanel',
                title: 'Duties & Taxes',
                contentContainer: 'Document2Panel'
              },
              {
                type: 'documentPanel',
                title: 'Bank Details',
                contentContainer: 'Document2Panel'
              }
            ]
          },
          {
            type: 'autoHideGroup',
            alignment: 'right',
            width: 100,
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
