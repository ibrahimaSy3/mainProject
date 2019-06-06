import { Component, OnInit } from '@angular/core';
import {Hostels} from '../model/model';
import{HttpClient} from '@angular/common/http';
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

users : Hostels[];
users$ : Observable<Hostels[]>;

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.users$ = this.http.get<Hostels[]>('http://localhost:4000/');

    this.users$.pipe(
      tap((users : Hostels[])  => this.users = users)).pipe().subscribe()

  }


  }

