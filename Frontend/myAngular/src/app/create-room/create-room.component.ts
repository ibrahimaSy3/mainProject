import { Component, OnInit } from '@angular/core';
import {tap} from "rxjs/operators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {


  hostelForm: FormGroup;


  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  postHostel() {
    this.http.post('http://localhost:4000/post', this.hostelForm.value)
      .pipe(
        tap(x => console.log(x)),
      )
      .subscribe();
  }


  initForm() {
    this.hostelForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      roomsNumber: [0, [Validators.required]]
    });
  }


}
