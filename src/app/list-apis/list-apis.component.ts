import { Component, OnInit } from '@angular/core';
import {WorkforceService} from '../services/workforce.service';
import {TourismService} from '../services/tourism.service';
import {LostService} from '../services/lost.service';
import {LateService} from '../services/late.service';

@Component({
  selector: 'app-list-apis',
  templateUrl: './list-apis.component.html',
  styleUrls: ['./list-apis.component.css']
})
export class ListApisComponent implements OnInit {

  constructor(private workForceService: WorkforceService, private tourismService: TourismService, private lostService: LostService
  ,private lateService:LateService) { }
  tiles = [
    {text: 'Hommes et Femmes', cols: 1, rows: 1, color: 'lightblue',
      desc:'Data.e vise à collecter' +
      ' des données géolocalisées sur les effectifs de femmes ' +
      'et d\'hommes travaillant sur le territoire de la MEL. ' +
      'Ce jeu de données est contributif et ouvert',
    path:'workforce'},
    {text: 'Points de vue', cols: 1, rows: 1, color: 'lightgreen',
      desc:'Localisation des points de vue - Tourisme',
      path:'tourism'},
    {text: 'Retard des bus', cols: 1, rows: 1, color: 'lightpink',
      desc:'Pourcentage des bus retardés de plus de 3 minutes selon les mois',
      path:'late'},
    {text: 'Objets trouvés à Lille Europe ', cols: 1, rows: 1, color: '#DDBDF1',
      desc:'Cette liste comprend uniquement les objets' +
      ' trouvés 10 jours après qu\'une déclaration de perte ait été enregistrée.',
      path:'lost'},
  ];
  ngOnInit() {
  }

  getDatas(path):void {
      if(path.localeCompare("workforce")==0) {
        this.callWorkForceApi();
      }
      else if(path.localeCompare("tourism")==0){
        this.callTourismApi();
      }
      else if(path.localeCompare("late")==0){
        this.callLateApi();

      }
      else if(path.localeCompare("lost")==0){
        this.callLostApi();

      }
  }
  callWorkForceApi():void {
    this.workForceService.getWorkforceData()
      .subscribe(response => console.log(response));
  }
  callLostApi():void {
    this.lostService.getLostObjectData()
      .subscribe(response => console.log(response));
  }
  callLateApi():void {
    this.lateService.getLateData()
      .subscribe(response => console.log(response));
  }
  callTourismApi():void {
    this.tourismService.getTourismData()
      .subscribe(response => console.log(response));
  }
}
