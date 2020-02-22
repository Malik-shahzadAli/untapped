import { AddNewHostComponent } from './../add-new-host/add-new-host.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'kt-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {

  constructor( public dialog:MatDialog) { }

  ngOnInit() {
  }
  hostCompetitions(){
    this.dialog.open(AddNewHostComponent,{
      height: '65%',
      width: '70%',
    })
  }
}
