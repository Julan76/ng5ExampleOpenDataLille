import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import {MyOwnCustomMaterialModuleModule} from './my-own-custom-material-module.module';
import { HeaderComponent } from './header/header.component';
import { ListApisComponent } from './list-apis/list-apis.component';
import { AppRoutingModule } from './/app-routing.module';
import { WorkforceComponent } from './workforce/workforce.component';
import { TourismComponent } from './tourism/tourism.component';
import { LateComponent } from './late/late.component';
import { LostComponent } from './lost/lost.component';
import {WorkforceService} from './services/workforce.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TourismService} from './services/tourism.service';
import {LateService} from './services/late.service';
import {LostService} from './services/lost.service';
import { ChartModule } from 'angular-highcharts';
import { AgmCoreModule } from '@agm/core';
import { Constants } from '../../constants';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListApisComponent,
    WorkforceComponent,
    TourismComponent,
    LateComponent,
    LostComponent,
  ],
  imports: [
    BrowserModule,MyOwnCustomMaterialModuleModule,FormsModule, AppRoutingModule,HttpClientModule,ChartModule,
    AgmCoreModule.forRoot({
      apiKey: Constants.API_KEY
    })
  ],
  providers: [WorkforceService,HttpClient,TourismService,LateService,LostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
