import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateHostelComponent} from "./create-hostel.component";

const routes: Routes = [
  {
    path: '',
    component: CreateHostelComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateHostelsRoutingModule { }
