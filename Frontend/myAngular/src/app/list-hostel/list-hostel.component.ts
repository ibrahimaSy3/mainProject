import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Hostels} from "../model/model";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list-hostel',
  templateUrl: './list-hostel.component.html',
  styleUrls: ['./list-hostel.component.scss']
})
export class ListHostelComponent implements OnInit {
  users$: Observable<Hostels[]>;
  users: Hostels[];


  constructor(
    private http: HttpClient
    ) { }

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
