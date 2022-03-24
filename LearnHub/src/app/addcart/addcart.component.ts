import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  carts: any;
  
 
  // users:any;
  // descriptionData: any=null;
  // cName: any;
  // usersAll: any;
  // searchTextVal: any;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
     this.getcart()
 
  }
  getcart():void{
    this.carts=[];
    this.http.get('http://localhost:5000/getcarts').subscribe(data => {  
    this.carts = data;
    
    });

  
  }
  deletecart(id:any){
    this.http.post('http://localhost:5000/deletecart',
      id).subscribe(data => {
        this.getcart();
      });
    
  }
}
