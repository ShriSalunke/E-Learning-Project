import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  myimage:string="assets/images/e14.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
