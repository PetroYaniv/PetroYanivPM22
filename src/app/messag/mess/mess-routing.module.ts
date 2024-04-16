import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MessComponent} from "./mess.component";

const MessRoutes: Routes = [
  {
    path: 'news',
    component: MessComponent
  },
];


@NgModule({
  imports: [ RouterModule.forChild(MessRoutes) ],
  exports: [ RouterModule ]
})

export class MessRoutingModule { }
