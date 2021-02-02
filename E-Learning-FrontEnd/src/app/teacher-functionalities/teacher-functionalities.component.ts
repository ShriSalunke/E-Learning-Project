import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherScheduleClassComponent } from '../teacher-schedule-class/teacher-schedule-class.component';

@Component({
  selector: 'app-teacher-functionalities',
  templateUrl: './teacher-functionalities.component.html',
  styleUrls: ['./teacher-functionalities.component.css']
})
export class TeacherFunctionalitiesComponent implements OnInit {
  localvalue:string="";
  constructor(private router:Router) { }

  ngOnInit(): void {
  this.localvalue=localStorage.getItem("teacher_name");
  }
  onClick1()
  {
      this.router.navigate(["/login/teacher-functionalities/schedule-class"]);
     
  }
  onClick2()
  {
      this.router.navigate(["/login/teacher-functionalities/view-class"]);
      
  }
}
