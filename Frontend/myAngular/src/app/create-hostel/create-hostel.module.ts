import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateHostelsRoutingModule} from "./create-hostels.routing.module";
import {CreateHostelComponent} from "./create-hostel.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AngularFirestoreModule} from "@angular/fire/firestore";

@NgModule({
  declarations: [
    CreateHostelComponent,
  ],
  imports: [
    CommonModule,
    CreateHostelsRoutingModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
  ]
})
export class CreateHostelModule { }
