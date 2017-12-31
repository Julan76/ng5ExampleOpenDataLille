import { Component, OnInit } from '@angular/core';
import {TourismService} from '../services/tourism.service';

@Component({
  selector: 'app-tourism',
  templateUrl: './tourism.component.html',
  styleUrls: ['./tourism.component.css']
})
export class TourismComponent implements OnInit {
   data=null;

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private tourismService:TourismService) { }

  ngOnInit() {
    this.callTourismApi();
  }
  callTourismApi():void {
    this.tourismService.getTourismData()
      .subscribe(response => {
        this.data=response;
          this.data=this.data.records.map(thing => thing.fields);
        },
        e => console.log("error while getting google map",e));
  }
}
