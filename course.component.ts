import { Component } from '@angular/core';


@Component({
  selector:  'course-form',
  template: `
  <h2>{{ title }}</h2>
  <ul>
  <li *ngFor="let course of course">
  {{ course }}
  </li>
  </ul>
  `
})

export class CourseComponent {

 title ="List of courses";
 course = ["course1" , "course2" ,"course3"];
}