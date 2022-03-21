import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  

})
export class CourseComponent implements OnInit {
  users:any;
  descriptionData: any;

  constructor(private router:Router,public http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData():void{
    this.http.get('http://localhost:5000/users').subscribe(data => {
    debugger;  
    this.users = data;
      console.log(this.users);
    
    });

  }
  descriptionShow(desc:any){
    this.descriptionData=desc;

    
  }
}

