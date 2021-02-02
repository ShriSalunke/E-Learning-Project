import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StudentServiceService } from '../Services/student-service.service';
import {student} from './Model/student'
@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
}) 
export class StudentRegistrationComponent implements OnInit {

  constructor(private studentAdd:StudentServiceService,
              private router:Router ) { }
  student=new student();
  ngOnInit(): void {
  }
  getValues()
  {
    if((this.student.confirm_password==null)||(this.student.email==null)||(this.student.fname==null)||
    (this.student.lname==null)||(this.student.password==null))
    {
      alert("All the Fields are Mandatory !!!")
    }
    else{
      if(this.student.confirm_password!=this.student.password)
      {
        alert("Password and Conform Password Should be same !!!")
      }
      else{
    this.studentAdd.Addstudent(this.student).subscribe(data=>{
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

  }}
