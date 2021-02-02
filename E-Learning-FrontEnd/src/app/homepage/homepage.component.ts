import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  myimage:string="assets/images/home1.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}

