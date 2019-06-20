import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListHostelComponent} from "./list-hostel.component";

const routes: Routes = [
  {
    path: '',
    component: ListHostelComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListHostelRoutingModule { }
