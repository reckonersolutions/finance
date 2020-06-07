import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};

  Highcharts = Highcharts;

  @Input() data = [];

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
        chart: {
            type: 'area'
        },
        title: {
            text: 'RANDOM DATA'
        },
        subtitle: {
            text: 'Demo'
        },
        credits: {
          enabled: false
        },
        exporting: {
          enabled: true
        },
        tooltip: {
            split: true,
            valueSuffix: ' millions'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: this.data
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }


}
