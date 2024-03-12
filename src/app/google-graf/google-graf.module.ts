import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GoogleGrafRoutingModule} from './google-graf-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {SgrafService} from "../sgraf.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GoogleGrafRoutingModule,
    HttpClientModule,

  ],
  providers:[SgrafService]
})
export class GoogleGrafModule { }
