import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrafickGrafComponent } from './strafick-graf.component';

const StrafickGrafRoutes: Routes = [
  {
    path: 'news',
    component: StrafickGrafComponent
  },
];

@NgModule({
  imports: [ RouterModule.forChild(StrafickGrafRoutes) ],
  exports: [ RouterModule ]
})
export class StrafickGrafRoutingModule { }
