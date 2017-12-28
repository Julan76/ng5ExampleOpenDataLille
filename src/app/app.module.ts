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
    BrowserModule,MyOwnCustomMaterialModuleModule,FormsModule, AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
