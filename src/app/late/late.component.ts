import { Component, OnInit } from '@angular/core';
import {LateService} from '../services/late.service';
import {Chart} from 'angular-highcharts';
import * as _ from 'lodash';

@Component({
  selector: 'app-late',
  templateUrl: './late.component.html',
  styleUrls: ['./late.component.css']
})
export class LateComponent implements OnInit {
    data=null;
    chart=null;
  constructor(private lateService:LateService) { }

  ngOnInit() {
    this.callLateApi();
  }
  callLateApi():void {
    this.lateService.getLateData()
      .subscribe(response => {
      this.data=response;
      this.drawAreaSplineChart(this.data.records);
      },
        e=>console.log("error while getting workflow",e));
  }
  drawAreaSplineChart(res):void {
    res= _.sortBy(res,['fields.mois']);
    const months=res.map(thing => thing.fields.mois);
       for(const i in res) {
         if (res[i].fields['mois']!=null)
         delete res[i].fields['mois'];
       }
    const  names =Object.keys(res[0].fields);
       var objectBusLineLate= {};
    for (const k in names) {
      var tab=[];
      var t=[];
      for (const j in  res) {
        for (const key in res[j].fields) {
          if (res[j].fields.hasOwnProperty(key)) {
            if(key===names[k]) {
              tab.push(res[j].fields[key]);
            }
          }
        }
         t[k]=tab;
        objectBusLineLate[names[k]]=tab;
      }
    }

    const arrayForHighcharts=[];
    for (const key in objectBusLineLate) {
      if (objectBusLineLate.hasOwnProperty(key)) {    //    console.log(key + " -> " + objectBusLineLate[key]);
        arrayForHighcharts.push({
          name: key,
          data:objectBusLineLate[key]
        });
      }
    }

    this.chart = new Chart({
      chart: {
        type: 'spline',
        zoomType: 'x'
      },
      plotOptions: {
        series: {
          allowPointSelect: true
        }
      },
      title: {
        text: 'Indices mensuels de retard des bus'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: months,
      },

      legend: {
        enabled: false
      },
      series: arrayForHighcharts

    });
  }
}
