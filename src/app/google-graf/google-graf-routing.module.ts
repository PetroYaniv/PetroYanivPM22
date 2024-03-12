import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleGrafComponent } from './google-graf.component';

const GoogleGrafRoutes: Routes = [
  {
    path: 'news',
    component: GoogleGrafComponent
  },
];

@NgModule({
  imports: [ RouterModule.forChild(GoogleGrafRoutes) ],
  exports: [ RouterModule ]
})
export class GoogleGrafRoutingModule { }
