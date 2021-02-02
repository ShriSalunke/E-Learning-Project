import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-functionalities',
  templateUrl: './student-functionalities.component.html',
  styleUrls: ['./student-functionalities.component.css']
})
export class StudentFunctionalitiesComponent implements OnInit {
  localvalue:string="";  
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.localvalue=localStorage.getItem("student_name");
    console.warn(this.localvalue)
 
  }onClick1()
  {
      if(localStorage.getItem("student_name")!=null)
      {
      this.router.navigate(["login/student-functionalities/find-class"]);
        
      }
      else{
        this.router.navigate(["/login"]);
   
      }
    }

}
