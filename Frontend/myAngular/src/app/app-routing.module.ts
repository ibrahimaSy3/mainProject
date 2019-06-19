import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'hostels-rooms',
    loadChildren:'./hostels-rooms/hostels-rooms.module#CreateRoomModule'
  },

  {
    path: 'hostels-rooms',
    loadChildren:'./hostels-rooms/hostels-rooms.module#ListRoomsModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
