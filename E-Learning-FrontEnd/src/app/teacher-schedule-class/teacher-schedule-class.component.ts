import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ScheduleServiceService } from '../Services/schedule-class.service';
import { schedule } from './Model/schedule';
import {FormGroup, FormsModule} from '@angular/forms';
import { teacher } from '../login/Model/teacher-login';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teacher-schedule-class',
  templateUrl: './teacher-schedule-class.component.html',
  styleUrls: ['./teacher-schedule-class.component.css']
})
export class TeacherScheduleClassComponent implements OnInit {
  localvalue:string=""
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
  topic:string;
  class_date:string;
  class_Link:string;
  time:string;
  teacher_id=localStorage.getItem("teacher_id");
  
  constructor(private scheduleAdd:ScheduleServiceService ,
              private router:Router) { }
  schedule=new schedule();
  
  ngOnInit(): void {
    this.localvalue=localStorage.getItem("teacher_name");
 
  }
  onClick()
  { 
    var obj={
      classname:this.classname,
      subject:this.subject,
      topic:this.topic,
      class_date:this.class_date,
      time:this.time,
      class_Link:this.class_Link,
      "teacher":{
      teacher_id:this.teacher_id
      }
      }
    console.log(obj);
    if((obj.classname==null)||(obj.subject==null)||(obj.topic==null)||(obj.class_date==null)||(obj.class_Link==null))
    {
      alert("Please Input all the fields");
    }
    else{
    this.scheduleAdd.Addschedule(obj).subscribe(data=>{
      console.log(data);
      Swal.fire({
        title: 'Saved?',
        text: 'Your Class is Successfully Created',
        icon: 'success',
        confirmButtonText: 'Ok',
      })
      this.router.navigate(['login/teacher-functionalities/view-class']);
 
    },err=>{
      console.log(err);
    })  
  }}


}
