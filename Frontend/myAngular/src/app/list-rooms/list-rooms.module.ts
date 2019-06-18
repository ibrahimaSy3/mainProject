import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListRoomsComponent} from "./list-rooms.component";
import {ListRoomsRoutingComponent} from "./list-rooms.routing.component";

@NgModule({
  declarations: [
    ListRoomsComponent
  ],
  imports: [
    CommonModule,
    ListRoomsRoutingComponent
  ]
})
export class ListRoomsModule { }
