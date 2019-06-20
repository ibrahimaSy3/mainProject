import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeleteHostelComponent} from "./delete-hostel.component";

const routes: Routes = [
  {
    path: '',
    component: DeleteHostelComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteHostelRoutingModule { }
