import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseResultComponent } from './course-result.component';

describe('CourseResultComponent', () => {
  let component: CourseResultComponent;
  let fixture: ComponentFixture<CourseResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
