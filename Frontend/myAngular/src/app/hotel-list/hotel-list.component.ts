import { Component, OnInit } from '@angular/core';
import {Hostels} from '../model/model';
import{HttpClient} from '@angular/common/http';
import {tap} from "rxjs/operators";
import {from, Observable} from "rxjs";
import {FormGroup} from "@angular/forms";

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

  ){}

  ngOnInit() {
  }




  getHostel() {


    this.users$ = this.http.get<Hostels[]>('http://localhost:4000');

    this.users$
      .pipe(
        tap((users: Hostels[]) => this.users = users))
      .subscribe();
  }




}








