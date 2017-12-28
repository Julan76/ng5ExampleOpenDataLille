import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts';

@Component({
  selector: 'app-workforce',
  templateUrl: './workforce.component.html',
  styleUrls: ['./workforce.component.css']
})
export class WorkforceComponent implements OnInit {

  constructor( ) { }
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Line 1',
      data: [1, 2, 3]
    }]
  });
  ngOnInit() {

  }

}
