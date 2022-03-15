import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }course=[
    {'id':1,'name':'Learn angular','description':'Angular Full Course - Learn Angular In 3 Hours | Angular Tutorial For Beginners','image':'../../assets/ag2.png'},
    {'id':1,'name':'Learn TypeScript','description':'TypeScript Full Course - Learn TypeScript In 2 Hours | TypeScript Tutorial For Beginners','image':'../../assets/ts.png'},
    {'id':1,'name':'Learn Nodejs','description':'Nodejs Full Course - Learn Nodejs In 5 Hours | Nodejs Tutorial For Beginners','image':'../../assets/ns2.png'},
    {'id':1,'name':'Learn Reactjs','description':'Reactjs Full Course - Learn Reactjs In 3 Hours | Reactjs Tutorial For Beginners','image':'../../assets/rs2.png'}
  
  ]
}
