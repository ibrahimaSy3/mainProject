import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DeleteHostelComponent } from './delete-hostel/delete-hostel.component';



@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    DeleteHostelComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
