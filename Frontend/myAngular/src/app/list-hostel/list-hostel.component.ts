import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Hostels} from "../model/model";
import {tap} from "rxjs/operators";
import {AngularFirestore} from "@angular/fire/firestore";
import {from} from "rxjs";


@Component({
  selector: 'app-list-hostel',
  templateUrl: './list-hostel.component.html',
  styleUrls: ['./list-hostel.component.scss']
})
export class ListHostelComponent implements OnInit {
  users: Hostels[];

  hostel: object;


  constructor(
    private httpClient: HttpClient,
    private afs: AngularFirestore,
  ) {
  }

  ngOnInit() {

  }

  getHostel() {
    return this.afs.collection("hostels").valueChanges()
      .pipe(
        tap((users: Hostels[]) => this.users = users))
      .subscribe();
  }

  deleteHostel(users: Hostels) {
    return this.afs.collection("hostels").doc(users.uid).delete()
  }

  postHostel() {
    from(this.afs.collection<Hostels[]>("hostels").add(this.users))
      .pipe()
      .subscribe()
  }


  patchHostel(users: Hostels) {
    return this.afs.collection("hostels").doc(users.uid).set(users)
  }

}
