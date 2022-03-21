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
  descriptionData: any=null;
  cName: any;
  usersAll: any;
  searchTextVal: any;

  constructor(private router:Router,public http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData():void{
    this.http.get('http://localhost:5000/getusers').subscribe(data => {  
    this.users = data;
    this.usersAll = data;
      console.log(this.users);
    
    });

  }
  descriptionShow(cName:any,desc:any){
    this.descriptionData=desc;
    this.cName=cName;
    
  }
  searchText(){
    this.users=this.usersAll.filter((element: { field: any; }) => element.field == this.searchTextVal);

  }
}

