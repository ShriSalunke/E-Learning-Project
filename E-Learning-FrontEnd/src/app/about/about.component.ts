import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  myimage:string="assets/images/e12.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
