import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-findashboard',
  templateUrl: './findashboard.component.html',
  styleUrls: ['./findashboard.component.scss']
})
export class FindashboardComponent implements OnInit {

  height: number | string = 200;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
