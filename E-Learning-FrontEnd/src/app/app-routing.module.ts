import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminFunctionalitiesComponent } from './admin-functionalities/admin-functionalities.component';
import { AdminShowScheduleComponent } from './admin-show-schedule/admin-show-schedule.component';
import { AdminShowStudentComponent } from './admin-show-student/admin-show-student.component';
import { AdminShowTeacherComponent } from './admin-show-teacher/admin-show-teacher.component';
import { SearchComponent } from './Class/search/search.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FindClassComponent } from './find-class/find-class.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { StudentFunctionalitiesComponent } from './student-functionalities/student-functionalities.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TeacherFunctionalitiesComponent } from './teacher-functionalities/teacher-functionalities.component';
import { TeacherRegistrationComponent } from './teacher-registration/teacher-registration.component';
import { TeacherScheduleClassComponent } from './teacher-schedule-class/teacher-schedule-class.component';
import { TeacherViewClassComponent } from './teacher-view-class/teacher-view-class.component';
import { UpdateScheduleClassComponent } from './update-schedule-class/update-schedule-class.component';

const routes: Routes = [
  {path: '',component:HomepageComponent},
  {path: 'home',component:HomepageComponent},
  {path: 'login',component:LoginComponent},
  {path: 'about',component:AboutComponent},
  {path: 'contactUs' ,component:ContactusComponent},
  {path: 'logout' ,component:LogoutComponent},
  
  {path: 'register',component:RegisterComponent},
  {path: 'register/teacher-registration', component: TeacherRegistrationComponent},
  {path: 'register/student-registration',component: StudentRegistrationComponent}, 
  
  {path: 'login/teacher-functionalities',component:TeacherFunctionalitiesComponent},
  {path: 'login/teacher-functionalities/schedule-class',component:TeacherScheduleClassComponent},
  {path: 'login/teacher-functionalities/update-schedule-class/:id',component:UpdateScheduleClassComponent},
  {path: 'login/teacher-functionalities/view-class',component:TeacherViewClassComponent},
 
  {path: 'login/student-functionalities',component:StudentFunctionalitiesComponent},
  {path: 'login/student-functionalities/find-class',component:FindClassComponent},
  {path: "login/student-functionalities/find-class/searches" ,component:SearchComponent},
  
  {path: 'login/admin-functionalities',component:AdminFunctionalitiesComponent},
  {path: 'login/admin-functionalities/show-teachers',component:AdminShowTeacherComponent},
  {path: 'login/admin-functionalities/show-students',component:AdminShowStudentComponent},
  {path: 'login/admin-functionalities/schedule-list',component:AdminShowScheduleComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,RegisterComponent,TeacherRegistrationComponent]

