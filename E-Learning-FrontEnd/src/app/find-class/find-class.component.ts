import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Schedule } from './Model/Schedule';
import {Router} from '@angular/router'

@Component({
  selector: 'app-find-class',
  templateUrl: './find-class.component.html',
  styleUrls: ['./find-class.component.css']
})
export class FindClassComponent implements OnInit {
 
  schedule=new Schedule();
  
  constructor(private rout:Router) { }

  ngOnInit(): void {
  }
  onClick(){
   
    localStorage.setItem("class" ,this.schedule.classname);
    localStorage.setItem("subject" ,this.schedule.subject);
    this.rout.navigate(["login/student-functionalities/find-class/searches"]);
  
  }

}
