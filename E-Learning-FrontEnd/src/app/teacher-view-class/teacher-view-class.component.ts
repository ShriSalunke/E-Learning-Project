import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {ScheduleServiceService} from '../Services/schedule-class.service'
@Component({
  selector: 'app-teacher-view-class',
  templateUrl: './teacher-view-class.component.html',
  styleUrls: ['./teacher-view-class.component.css']
})
export class TeacherViewClassComponent implements OnInit {
  Classes:any=[];
  constructor(private service:ScheduleServiceService,
              private router:Router ) { }

  ngOnInit(): void {
   
    this.service.viewClass( localStorage.getItem("teacher_id")).subscribe(res=>{
      this.Classes=res;
    }, err=>{

    })
  }

  onDelete(i){   
    this.service.deleteClass(this.Classes[i].teacher_id).subscribe(data=>{
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

  onUpdate(id){   
    this.router.navigate(['login/teacher-functionalities/update-schedule-class',id]);
  }

}
