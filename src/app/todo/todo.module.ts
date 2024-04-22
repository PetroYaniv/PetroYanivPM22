import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {TodoComponent} from "./todo.component";


const routes: Routes = [
  {
    path: '', component: TodoComponent ,

  }
];
@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ],
  exports: [RouterModule]
})
export class TodoModule { }

