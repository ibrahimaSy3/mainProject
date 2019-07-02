import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Hostels, Rooms} from "../model/model";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {

  users: Rooms[];
  users$: Observable<Rooms[]>;
  roomForm: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
  ){}
  ngOnInit() {
    this.initForm();

  }

  postRoom() {
    this.http.post('http://localhost:4200/post', this.roomForm.value)
      .pipe()
      .subscribe();
  }

  getRoom() {
    this.users$ = this.http.get<Rooms[]>('http://localhost:4000');

    this.users$
      .pipe(
        tap((users: Rooms[]) => this.users = users))
      .subscribe();

  }
  initForm() {
    this.roomForm = this.fb.group({
      roomName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      size: [0, [Validators.required]]
    });
  }
}
