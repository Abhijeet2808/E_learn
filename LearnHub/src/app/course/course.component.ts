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
    {'id':1,'name':'Learn angular','description':'Angular Full Course - Learn Angular In 3 Hours | Angular Tutorial For Beginners','image':'../../assets/ang.png'},
    {'id':1,'name':'Learn TypeScript','description':'Angular Full Course - Learn Angular In 3 Hours | Angular Tutorial For Beginners','image':'../../assets/ang.png'}
  
  ]
}
