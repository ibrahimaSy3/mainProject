import { Component, OnInit } from '@angular/core';
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  postHostel(){
    this.http.post('http://localhost:4000/post',this.hostelForm.value)
      .pipe(
        tap(x => console.log(x)),
      )
      .subscribe();
}
