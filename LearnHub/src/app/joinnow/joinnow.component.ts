import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-joinnow',
  templateUrl: './joinnow.component.html',
  styleUrls: ['./joinnow.component.css']
})
export class JoinnowComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, public http: HttpClient) {

  }
  checkoutForm = this.formBuilder.group({
    user_name: '',
    e_mail: '', 
    course_name: '',
    phone_no: 0,
    address: ''

  });

  ngOnInit(): void {
  }
  onSubmit(): void {
    

    // Process checkout data here
    this.http.post('http://localhost:5000/users',
      this.checkoutForm.value).subscribe(data => {
        debugger;

      });
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();

  }

}



