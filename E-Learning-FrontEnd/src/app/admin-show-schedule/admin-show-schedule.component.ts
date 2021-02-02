import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Schedule } from '../find-class/Model/Schedule';
import { ScheduleServiceService } from '../Services/schedule-class.service';

@Component({
  selector: 'app-admin-show-schedule',
  templateUrl: './admin-show-schedule.component.html',
  styleUrls: ['./admin-show-schedule.component.css']
})
export class AdminShowScheduleComponent implements OnInit {
  schedules=new Schedule();
  constructor(private service:ScheduleServiceService) { }

  ngOnInit(): void {
    this.service.getAllSchedule( ).subscribe(res=>{
      this.schedules=res;
    }, err=>{

       })
  }
  onDelete(i){   
    this.service.deleteClass(this.schedules[i].teacher_id).subscribe(data=>{
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
