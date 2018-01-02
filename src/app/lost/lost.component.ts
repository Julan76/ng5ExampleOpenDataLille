import { Component, OnInit } from '@angular/core';
import {LostService} from '../services/lost.service';
import {Chart} from 'angular-highcharts';

@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.css']
})
export class LostComponent implements OnInit {
    data=null;
    chart=null;
  constructor(private lostService:LostService) { }

  ngOnInit() {
  this.callLostApi();
  }
  callLostApi():void {
    this.lostService.getLostObjectData()
      .subscribe(response => {
        this.data=response;
        this.drawPie(this.data.facet_groups);
        },
        e => console.log("error while getting lost ",e)
        );
  }
  drawPie(res):void {
    const chartArray=[];
    for(const i in res[2].facets ) {
      if(res[2].facets[i]!=null) {
       chartArray.push({
         name:res[2].facets[i].name+" ("+Math.round((res[2].facets[i].count/res[1].facets[0].count)*100)+"%)",
         y:res[2].facets[i].count,
         sliced: true,
         selected: true
       });
      }
    }

    this.chart = new Chart({
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Objets trouvés en gare lille Europe'
      },
      credits: {
        enabled: false
      },

      legend: {
        enabled: false
      },
      series: [{
        data: chartArray
  }]
    });
  }
}
