import { Component, OnInit } from '@angular/core';
import {LateService} from '../services/late.service';

@Component({
  selector: 'app-late',
  templateUrl: './late.component.html',
  styleUrls: ['./late.component.css']
})
export class LateComponent implements OnInit {

  constructor(private lateService:LateService) { }

  ngOnInit() {
    this.callLateApi();
  }
  callLateApi():void {
    this.lateService.getLateData()
      .subscribe(response => console.log(response));
  }
}
