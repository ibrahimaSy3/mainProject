import { Component, OnInit } from '@angular/core';
import {Hostels} from '../model/model';
import{HttpClient} from '@angular/common/http';
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})

export class HotelListComponent implements OnInit {

  users: Hostels[];
  users$: Observable<Hostels[]>;
  hostelForm: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
  ){}

  ngOnInit() {
    this.initForm();
  }

  postHostel(){
    this.http.post('http://localhost:4000/post',this.hostelForm.value)
      .pipe(
        tap(x => console.log(x)),
      )
      .subscribe();
  }
  getHostel() {
  }
  initForm() {
    this.hostelForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      roomsNumber: [0, [Validators.required]]
    });
  }

}








