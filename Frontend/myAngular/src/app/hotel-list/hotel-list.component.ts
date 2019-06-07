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

  users: Hostels[];
  users$: Observable<Hostels[]>;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.users$ = this.http.get<Hostels[]>('http://localhost:4000/');

    this.users$.pipe(
      tap((users: Hostels[]) => this.users = users)).subscribe();


    /*
          this.http.post<Hostels[]>('http://localhost:4000/post', {
            "firstname":'toto',
            "lastname" :'tata',
            "children": true,
            "age" : 30,
          })
            .pipe()
            .subscribe();
    */

    /*
    return this.http.put<Hostels[]>('http://localhost:4000/put/oxSYtGI4CuoQY6rzjLwK', {

        "children":'true',
        "lastname":'toto',
         "age":'34'

    })
      .pipe()
      .subscribe();
    */


  //  return this.http.patch<Hostels[]>('http://localhost:4000/patch/oxSYtGI4CuoQY6rzjLwK', {"children": 'false',"lastname": 'toto',"age": '37').pipe().subscribe();



//    return this.http.delete<Hostels[]>('http://localhost:4000/delete/oxSYtGI4CuoQY6rzjLwK').pipe().subscribe();


  }

}







