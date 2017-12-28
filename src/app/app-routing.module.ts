import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TourismComponent} from './tourism/tourism.component';
import {WorkforceComponent} from './workforce/workforce.component';
import {LateComponent} from './late/late.component';
import {LostComponent} from './lost/lost.component';
import {ListApisComponent} from './list-apis/list-apis.component';

const routes: Routes = [
  { path: '', redirectTo: '/apis', pathMatch: 'full' },
  { path: 'apis', component: ListApisComponent },
  { path: 'workforce', component: WorkforceComponent },
  { path: 'tourism', component: TourismComponent },
  { path: 'late', component: LateComponent },
  { path: 'lost', component: LostComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
