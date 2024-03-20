import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StrafickGrafRoutingModule} from './strafick-graf-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {SgrafService} from "../sgraf.service";
import {provideCharts, withDefaultRegisterables} from "ng2-charts";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StrafickGrafRoutingModule,
    HttpClientModule,

  ],
  providers:[SgrafService,provideCharts(withDefaultRegisterables())]
})
export class StrafickGrafModule { }
