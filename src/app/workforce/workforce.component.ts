import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts';
import {WorkforceService} from '../services/workforce.service';

@Component({
  selector: 'app-workforce',
  templateUrl: './workforce.component.html',
  styleUrls: ['./workforce.component.css']
})
export class WorkforceComponent implements OnInit {
     data=null;
     chart=null;
  constructor(private workForceService:WorkforceService ) { }

  ngOnInit() {
    this.callWorkForceApi();
  }
  callWorkForceApi():void {
    this.workForceService.getWorkforceData()
      .subscribe(response => {
        this.data=response;
          this.drawBarChart(this.data.records);
       },
        e=> console.log("error while getting workflow ",e));
  }
  drawBarChart(res):void {
    this.chart = new Chart({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: res.map(thing => thing.fields.nom_de_l_etablissement),
      },
      legend: {
        enabled: false
      },
      series: [{
        name: 'Men',
        data: res.map(thing => thing.fields.nombre_d_hommes),
      },
        {
          name:'Women',
          data: res.map(thing => thing.fields.nombre_de_femmes),
        }]

    });
  }
}
