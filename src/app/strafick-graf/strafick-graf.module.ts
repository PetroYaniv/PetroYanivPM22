import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StrafickGrafRoutingModule} from './strafick-graf-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {SgrafService} from "../sgraf.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StrafickGrafRoutingModule,
    HttpClientModule,

  ],
  providers:[SgrafService]
})
export class StrafickGrafModule { }
