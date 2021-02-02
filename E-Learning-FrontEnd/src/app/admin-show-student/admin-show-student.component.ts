import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { StudentServiceService } from '../Services/student-service.service';
import { TeacherServiceService } from '../Services/teacher-service.service';

@Component({
  selector: 'app-admin-show-student',
  templateUrl: './admin-show-student.component.html',
  styleUrls: ['./admin-show-student.component.css']
})
export class AdminShowStudentComponent implements OnInit {
  Students:any=[];
  constructor(private service:StudentServiceService) { }

  ngOnInit(): void {
    this.service.getStudents( ).subscribe(res=>{
      this.Students=res;
    }, err=>{

       })
  }
  onDelete(i){   
    console.log(this.Students);
    console.log(i);
    
    console.log(this.Students[i].student_id);
    this.service.deleteStudents(this.Students[i].student_id).subscribe(data=>{
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
