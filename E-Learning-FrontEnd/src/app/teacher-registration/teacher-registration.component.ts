import { Component, OnInit } from '@angular/core';
import {teacher} from './Model/teacher'
import {TeacherServiceService} from '../Services/teacher-service.service'
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-registration',
  templateUrl: './teacher-registration.component.html',
  styleUrls: ['./teacher-registration.component.css']
})
export class TeacherRegistrationComponent implements OnInit {

  constructor(private teacherAdd:TeacherServiceService,
              private router:Router ) { }
  teacher=new teacher();
  ngOnInit(): void {
  }
  getValues()
  {
    if((this.teacher.address==null)||(this.teacher.confirm_password==null)||(this.teacher.contact_number==null)||
    (this.teacher.email==null)||(this.teacher.fname==null)||(this.teacher.lname==null)||
    (this.teacher.password==null)||(this.teacher.yearOfExp==null))
    {
      alert("All the Fields are Mandatory !!!")
    }
    else{
      if(this.teacher.confirm_password!=this.teacher.password)
      {
        alert("Password and Conform Password Should be same !!!")
      }
      else{
        this.teacherAdd.Addteacher(this.teacher).subscribe(data=>{
          console.log(data);
          Swal.fire({
            title: 'Registered?',
            text: 'You Registered Successfully',
            icon: 'success',
            confirmButtonText: 'Ok',
          })
          this.router.navigate(['login']);
    
        },err=>{
          console.log(err);
        })  
    }}
   
  }

}
