import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'create-hostel',
    loadChildren: './create-hostel/create-hostel.module#CreateHostelModule'
  },

  {
    path: 'list-hostel',
    loadChildren: './list-hostel/list-hostel.module#ListHostelModule'
  },
  {
    path: 'create-room',
    loadChildren: './create-room/create-room.module#CreateRoomModule'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
