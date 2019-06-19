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
  }

  postHostel(){
    this.http.post('http://localhost:4000/post',this.hostelForm.value)
      .pipe(
        tap(x => console.log(x)),
      )
      .subscribe();
  }


  getHostel() {
    this.users$ = this.http.get<Hostels[]>('http://localhost:4000');

    this.users$
      .pipe(
        tap((users: Hostels[]) => this.users = users))
      .subscribe();
  }

  putHostel(){

  }





}








