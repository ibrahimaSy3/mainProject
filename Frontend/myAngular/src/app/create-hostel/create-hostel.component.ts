import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Hostels} from "../model/model";
import {AngularFirestore} from "@angular/fire/firestore";
import {from} from "rxjs";

@Component({
  selector: 'app-create-hostel',
  templateUrl: './create-hostel.component.html',
  styleUrls: ['./create-hostel.component.scss']
})
export class CreateHostelComponent implements OnInit {

  hostelForm: FormGroup;
  users: Hostels[];



  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private afs : AngularFirestore,
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  postHostel() {
    from(this.afs.collection<Hostels[]>("hostels").add(this.hostelForm.value))
      .pipe()
      .subscribe()
  }


  initForm() {
    this.hostelForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      roomsNumber: [0, [Validators.required]]
    });
  }


}
