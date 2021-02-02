import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ScheduleServiceService} from '../../Services/schedule-class.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service:ScheduleServiceService,
              private router:Router) { }
  Classes:any=[];

  ngOnInit(): void 
  {
    
    this.service.getClass(localStorage.getItem("class"),
                          localStorage.getItem("subject")).subscribe(res=>{
      this.Classes=res;
    }, err=>{

    })
    
  }

}
