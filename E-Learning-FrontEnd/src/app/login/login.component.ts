import { Component, OnInit } from '@angular/core';
import { TeacherServiceService } from '../Services/teacher-service.service';
import { teacher } from './Model/teacher-login';
import { student } from './Model/student-login';
import { Router } from '@angular/router';
import { StudentServiceService } from '../Services/student-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  a_email:string=""
  a_password:string=""
  name:string=""
  constructor(private teacherValidate:TeacherServiceService,
              private studentValidate:StudentServiceService,
              private router:Router ) { }
  teacher=new teacher();
  student=new student();
  ngOnInit(): void {
    
  }
  onClick1()
  {
    this.teacherValidate.LoginTeacher(this.teacher).subscribe(data=>{
      console.log(data);
      if(data!=null)
      {
      this.router.navigate(["/login/teacher-functionalities"]);
      localStorage.setItem("teacher_name",data.fname);
      localStorage.setItem("teacher_id",data.teacher_id);
      
      }
      else{
        alert("Wrong Password");
      }
    },err=>{
      alert(err);
    })  
  }
  onClick2()
  {
    
    this.studentValidate.LoginStudent(this.student).subscribe(data=>{
      console.warn(data);
      if(data!=null)
      {
        this.router.navigate(["login/student-functionalities"]);
        localStorage.setItem("student_name",data.fname);
        localStorage.setItem("student_id",data.Student_id);
      }
      else{
        alert("Wrong Password");
      }
    },err=>{
      alert(err);
    })  
  }


  onClick3()
  {
    console.log(this.a_email);
    console.log(this.a_password);
    if((this.a_email=="admin@gmail.com")&&(this.a_password=="admin"))
    {
      this.router.navigate(['login/admin-functionalities']);
      localStorage.setItem("admin_name","Admin");
    }
    
  }

  


}


