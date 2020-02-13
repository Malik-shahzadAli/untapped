import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fileds=['Acting','Art','Comedy','Design','Fashion','Photography','Music','Modeling']
  constructor() { }

  ngOnInit() {
  }

}
