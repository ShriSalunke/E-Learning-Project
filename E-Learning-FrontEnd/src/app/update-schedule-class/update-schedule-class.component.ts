import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ScheduleServiceService } from '../Services/schedule-class.service';
import { schedule } from '../teacher-schedule-class/Model/schedule';


@Component({
  selector: 'app-update-schedule-class',
  templateUrl: './update-schedule-class.component.html',
  styleUrls: ['./update-schedule-class.component.css']
})
export class UpdateScheduleClassComponent implements OnInit {
  schedule=new schedule();
  class_name: any = [
    {cs_id: 1, cs_name: 'Class 1' },
    {cs_id: 2, cs_name: 'Class 2'},
    {cs_id: 3, cs_name: 'Class 3'},
    {cs_id: 4, cs_name: 'Class 4' },
    {cs_id: 5, cs_name: 'Class 5' },
    {cs_id: 6, cs_name: 'Class 6'},
    {cs_id: 7, cs_name: 'Class 7'},
    {cs_id: 8, cs_name: 'Class 8' },
    {cs_id: 9, cs_name: 'Class 9' },
    {cs_id: 10, cs_name: 'Class 10'},
    {cs_id: 11, cs_name: 'Class 11'},
    {cs_id: 12, cs_name: 'Class 12' },
    
    ];
  subject_array: any = [
    {cs_id: 'Hindi',cs_name: 'Hindi' },
    {cs_id: 'English', cs_name: 'English'},
    {cs_id: 'Maths', cs_name: 'Maths'},
    {cs_id: 'Evs', cs_name: 'Evs' },
    {cs_id: 'History',cs_name: 'History' },
    {cs_id: 'Civics', cs_name: 'Civics'},
    {cs_id: 'Geography', cs_name: 'Geography'},
    {cs_id: 'Sanskrit', cs_name: 'Sanskrit' },
    {cs_id: 'Physics',cs_name: 'Physics' },
    {cs_id: 'Chemistry', cs_name: 'Chemistry'},
    {cs_id: 'Biology', cs_name: 'Biology'},
    {cs_id: 'Accounts', cs_name: 'Accounts' },
    
      ];
      classname:string;
      subject:string;
      
      
  constructor(private service:ScheduleServiceService,
              private activatedRoute:ActivatedRoute ,
              private router:Router) { }

  ngOnInit(): void {
    this.service.getScheduleById(this.activatedRoute.snapshot.params["id"]).subscribe(
      data=>{
        this.schedule=data;
      },err=>{
        console.log(err);
      }
    )
    
  }
  onUpdateAndSubmit(schedule){   
    if((schedule.classname==null)||(schedule.subject==null)||
    (schedule.topic==null)||(schedule.class_date==null)||(schedule.class_Link==null))
    {
      alert("Please Input all the fields");
    }
    else{
    console.log(schedule);
    
    this.service.updateClass(this.activatedRoute.snapshot.params["id"],schedule).subscribe(data=>{
      console.log(data);

      Swal.fire({
        title: 'Updated?',
        text: 'You Updated Successfully',
        icon: 'success',
        confirmButtonText: 'Ok',
        
      })  
      this.router.navigate(['login/teacher-functionalities/view-class']);
 
    },err=>{
      console.log(err);
    })  
  }}

}
