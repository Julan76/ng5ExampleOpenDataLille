import { Component, OnInit } from '@angular/core';
import {TourismService} from '../services/tourism.service';

@Component({
  selector: 'app-tourism',
  templateUrl: './tourism.component.html',
  styleUrls: ['./tourism.component.css']
})
export class TourismComponent implements OnInit {

  constructor(private tourismService:TourismService) { }

  ngOnInit() {
    this.callTourismApi();
  }
  callTourismApi():void {
    this.tourismService.getTourismData()
      .subscribe(response => console.log(response));
  }
}
