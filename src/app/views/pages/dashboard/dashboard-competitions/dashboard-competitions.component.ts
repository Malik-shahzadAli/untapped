import { AddNewHostComponent } from './../../add-new-host/add-new-host.component';
import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'kt-dashboard-competitions',
  templateUrl: './dashboard-competitions.component.html',
  styleUrls: ['./dashboard-competitions.component.scss']
})
export class DashboardCompetitionsComponent implements OnInit {

  constructor( public dialog:MatDialog ) { }

  ngOnInit() {
  }
  addHost(){
    // this.dialog.open(PopupWindowComponent,{data:{description:'Fetching',content:'We Just start fetching updated data please wait...'}})
    this.dialog.open(AddNewHostComponent,{
      height: '65%',
      width: '70%',
    })
  }
}
