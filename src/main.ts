import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {HttpClientModule} from "@angular/common/http";
import {NgFor} from "@angular/common";
import {enableProdMode, NgModule} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {SgrafService} from "./app/sgraf.service";
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import {StrafickGrafComponent} from "./app/strafick-graf/strafick-graf.component";
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import {TodoComponent} from "./app/todo/todo.component";
import {MessagComponent} from "./app/messag/messag.component";
import {ApppageComponent} from "./app/apppage/apppage.component";
import {MapComponent} from "./app/map/map.component";
import {yourGuardGuard} from "./app/your-guard.guard";





const routes:Routes=[
{ path: "StrafickGraf", component: StrafickGrafComponent },

  { path: "apppage", component: ApppageComponent, canActivateChild:[yourGuardGuard],
    children: [

  { path: "todo", component: TodoComponent},
  { path: "mess", component: MessagComponent}
  ],},
  { path: "map", component: MapComponent,canActivate:[yourGuardGuard] },
  {path: '', redirectTo: 'apppage', pathMatch: 'full'},
]



bootstrapApplication(AppComponent,{

  providers:[provideRouter(routes),SgrafService, importProvidersFrom(HttpClientModule), provideCharts(withDefaultRegisterables())]
})
  .catch((err) => console.error(err));
