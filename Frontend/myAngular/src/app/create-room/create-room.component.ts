import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {

  roomForm: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();


  }

  postRoom() {
    this.http.post('http://localhost:4200/post', this.roomForm.value)
      .pipe()
      .subscribe();
  }


  initForm() {
    this.roomForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      roomsNumber: [0, [Validators.required]]
    });
  }
}
