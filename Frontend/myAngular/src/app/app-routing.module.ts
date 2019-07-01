import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'create-hostel',
    loadChildren:'./create-hostel/create-hostel.module#CreateHostelModule'
  },

  {
    path: 'list-hostel',
    loadChildren: './list-hostel/list-hostel.module#ListHostelModule'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
