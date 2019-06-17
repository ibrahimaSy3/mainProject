import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateRoomComponent} from "./create-room.component";
import {CreateRoomRoutingModule} from "./create-room.routing.module";
import{HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    CreateRoomComponent
  ],
  imports: [
    CommonModule,
    CreateRoomRoutingModule
  ]
})
export class CreateRoomModule { }

