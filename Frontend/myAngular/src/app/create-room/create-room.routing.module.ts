import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateRoomComponent} from "./create-room.component";

const routes: Routes = [
  {
    path: 'create-room',
    loadChildren: './create-room/create-room.module#CreateroomModule'
  },

  {
    path: 'create-hostel',
    loadChildren: './create-room/create-room.module#Create-RoomModule'
  },
  {
    path: 'create-room',
    loadChildren: './create-room/create-room.module#CreateRoomModule'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoomRoutingModule { }
