import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  course=[
    {'id':1,'name':'Angular','description':'Angular is a platform for building mobile and desktop web applications','image':'../../assets/angular.png'},
    {'id':2,'name':'Node','description':'Angular is a platform for building mobile and desktop web applications','image':'../../assets/node.png'},
    {'id':3,'name':'Gatsby','description':'Angular is a platform for building mobile and desktop web applications','image':'../../assets/gatsby.png'},
    {'id':4,'name':'Scully','description':'Angular is a platform for building mobile and desktop web applications','image':'../../assets/scully.png'}
]
}
