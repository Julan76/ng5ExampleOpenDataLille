import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatMenuModule,
  MatProgressSpinnerModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [MatButtonModule,MatToolbarModule,BrowserAnimationsModule,MatProgressSpinnerModule,
    MatCardModule,MatFormFieldModule,MatInputModule
  ,MatMenuModule,MatIconModule,MatGridListModule,MatTooltipModule],
  exports: [MatButtonModule,MatToolbarModule,BrowserAnimationsModule,MatProgressSpinnerModule,
    MatCardModule,MatFormFieldModule,
    MatInputModule,MatMenuModule,MatIconModule,MatGridListModule,MatTooltipModule],
  declarations: []
})
export class MyOwnCustomMaterialModuleModule { }
