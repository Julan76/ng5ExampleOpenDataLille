import { Component, OnInit } from '@angular/core';
import {LostService} from '../services/lost.service';

@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.css']
})
export class LostComponent implements OnInit {

  constructor(private lostService:LostService) { }

  ngOnInit() {
  this.callLostApi();
  }
  callLostApi():void {
    this.lostService.getLostObjectData()
      .subscribe(response => console.log(response));
  }
}
