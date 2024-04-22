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
import {ApppageComponent} from "./app/apppage/apppage.component";
import {yourGuardGuard} from "./app/your-guard.guard";





const routes:Routes=[
{ path: "StrafickGraf", component: StrafickGrafComponent },

  {path: '', redirectTo: 'apppage', pathMatch: 'full'},

  { path: "apppage", component: ApppageComponent, canActivateChild:[yourGuardGuard],
    children: [

  { path: "todo",
    loadChildren: ()=>import('./app/todo/todo.module').then(
      (m) =>m.TodoModule
    )
  },
  { path: "mess",
    loadChildren: ()=>import('./app/messag/messag.module').then(
      (m) =>m.MessagModule
    )
  }
  ],},
  { path: "map",
    loadChildren: ()=>import('./app/map/map.module').then(
      (m) =>m.MapModule
    ),
   canActivate:[yourGuardGuard] },
]



bootstrapApplication(AppComponent,{

  providers:[provideRouter(routes),SgrafService, importProvidersFrom(HttpClientModule), provideCharts(withDefaultRegisterables())]
})
  .catch((err) => console.error(err));
