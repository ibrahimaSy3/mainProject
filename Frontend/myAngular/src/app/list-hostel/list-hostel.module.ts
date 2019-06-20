import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListHostelComponent} from "./list-hostel.component";
import {ListHostelRoutingModule} from "./liste-hostel.routing.module";

@NgModule({
  declarations: [
    ListHostelComponent
  ],
  imports: [
    CommonModule,
    ListHostelRoutingModule

  ]
})
export class ListHostelModule { }
