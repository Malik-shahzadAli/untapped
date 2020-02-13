import { Component, OnInit } from '@angular/core';
import {MatDialog,  MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'kt-add-new-host',
  templateUrl: './add-new-host.component.html',
  styleUrls: ['./add-new-host.component.scss']
})
export class AddNewHostComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

}
