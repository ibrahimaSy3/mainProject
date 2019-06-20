import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-create-hostel',
  templateUrl: './create-hostel.component.html',
  styleUrls: ['./create-hostel.component.scss']
})
export class CreateHostelComponent implements OnInit {

  hostelForm: FormGroup;


  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  postHostel() {
    this.http.post('http://localhost:4000/post', this.hostelForm.value)
      .pipe()
      .subscribe();
  }


  initForm() {
    this.hostelForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      roomsNumber: [0, [Validators.required]]
    });
  }


}
