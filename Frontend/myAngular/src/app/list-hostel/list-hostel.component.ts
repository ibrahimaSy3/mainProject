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
    private httpClient: HttpClient
    ) { }

  ngOnInit() {

  }

  getHostel() {
    this.users$ = this.httpClient.get<Hostels[]>('http://localhost:4000');

    this.users$
      .pipe(
        tap((users: Hostels[]) => this.users = users))
      .subscribe();
  }

  removeHostel(users: Hostels) {
    return this.httpClient.delete<Hostels[]>('http://localhost:4000/delete/' + users.uid)
      .pipe()
      .subscribe();
}

}
