import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessRoutingModule} from "./mess-routing.module";
import {SgrafService} from "../../sgraf.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [
    MessRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers:[SgrafService]
})
export class MessModule { }
