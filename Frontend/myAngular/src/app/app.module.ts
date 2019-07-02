import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CreateRoomComponent } from './create-room/create-room.component';
import {AngularFirestoreModule} from "@angular/fire/firestore";


@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    CreateRoomComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFirestoreModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
