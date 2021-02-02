import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-functionalities',
  templateUrl: './admin-functionalities.component.html',
  styleUrls: ['./admin-functionalities.component.css']
})
export class AdminFunctionalitiesComponent implements OnInit {
  localvalue:string="";
  constructor(private router:Router) { }

  ngOnInit(): void {
  this.localvalue=localStorage.getItem("admin_name");
  }
  onClick1()
  {
      this.router.navigate(["login/admin-functionalities/show-teachers"]);     
  }
  onClick2()
  {
      this.router.navigate(["login/admin-functionalities/show-students"]);      
  }
  onClick3()
  {
      this.router.navigate(["login/admin-functionalities/schedule-list"]);  
  }

}
