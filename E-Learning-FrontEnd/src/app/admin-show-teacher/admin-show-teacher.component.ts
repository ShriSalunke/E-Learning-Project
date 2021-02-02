import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {TeacherServiceService} from '../Services/teacher-service.service';
@Component({
  selector: 'app-admin-show-teacher',
  templateUrl: './admin-show-teacher.component.html',
  styleUrls: ['./admin-show-teacher.component.css']
})
export class AdminShowTeacherComponent implements OnInit {
  Teachers:any=[];
  constructor(private service:TeacherServiceService) { }

  ngOnInit(): void {
    this.service.getTeachers( ).subscribe(res=>{
      this.Teachers=res;
    }, err=>{

       })
  }
  onDelete(i){   
    console.log(this.Teachers[i].teacher_id);
    this.service.deleteTeacher(this.Teachers[i].teacher_id).subscribe(data=>{
      console.log(data);
      if(data==true)
      Swal.fire({
        title: 'Deleted?',
        text: 'You Deleted Successfully',
        icon: 'success',
        confirmButtonText: 'Ok',

      })
      window.location.reload();
    },err=>{
      console.log(err);
    })  
  }
}