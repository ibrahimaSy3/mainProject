import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateHostelsRoutingModule} from "./create-hostels.routing.module";
import {CreateHostelComponent} from "./create-hostel.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CreateHostelComponent,
  ],
  imports: [
    CommonModule,
    CreateHostelsRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreateHostelModule { }
