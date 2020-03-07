import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.css']
})
export class CourseOverviewComponent implements OnInit {

  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }

}
