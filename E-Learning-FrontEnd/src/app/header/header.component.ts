import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser1=localStorage.getItem("teacher_name");
  currentUser2=localStorage.getItem("student_name");
  currentUser3=localStorage.getItem("admin_name");
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  isLoggedIn() {
    if (this.currentUser1 != null) {
      return true;
    }
    else if (this.currentUser2 != null) {
      return true;
    }
    else if (this.currentUser3 != null) {
      return true;
    }
    else{
    return false;
    }
  }
  logout(){
    window.location.reload();
            
    localStorage.clear();
    
  }
}
