import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InformationDialogComponent } from 'src/app/common/information-dialog/information-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
searchQuery: any;

  constructor(private  dialog:MatDialog) { }

  ngOnInit(): void {
  }
  show(value:any){

    let x={
      data:value
    }
    const modalConfig=new MatDialogConfig()
    modalConfig.disableClose=true
    modalConfig.panelClass="dialog-resposnive"
    modalConfig.data=x;
    const dialogRef= this.dialog.open(InformationDialogComponent,modalConfig)

  }

}


