import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'create-room',
    loadChildren:'./create-room/create-room.module#CreateRoomModule'
  },

  {
    path: 'list-room',
    loadChildren:'./list-room/list-room.module#CreateRoomModule#ListRoomsModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
