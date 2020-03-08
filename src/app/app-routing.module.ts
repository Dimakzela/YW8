import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CourseOverviewComponent} from './course-overview/course-overview.component';
import {CourseMaterialComponent} from './course-material/course-material.component';
import {CourseTestComponent} from './course-test/course-test.component';
import {CourseResultComponent} from './course-result/course-result.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {TraineeProfileComponent} from './trainee-profile/trainee-profile.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'course-overview', component: CourseOverviewComponent},
  {path: 'course-material', component: CourseMaterialComponent},
  {path: 'course-test', component: CourseTestComponent},
  {path: 'course-result', component: CourseResultComponent},
  {path: 'dashboard', component: AdminDashboardComponent},
  {path: 'trainee-profile', component: TraineeProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
