import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {HttpClientModule} from "@angular/common/http";
import {NgFor} from "@angular/common";
import {SgrafService} from "./app/sgraf.service";
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import {StrafickGrafComponent} from "./app/strafick-graf/strafick-graf.component";

const routes:Routes=[
{ path: "StrafickGraf", component: StrafickGrafComponent },
]
bootstrapApplication(AppComponent,{

  providers:[provideRouter(routes),SgrafService, importProvidersFrom(HttpClientModule)]
})
  .catch((err) => console.error(err));

