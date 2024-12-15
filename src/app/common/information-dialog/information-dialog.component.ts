import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-information-dialog',
  templateUrl: './information-dialog.component.html',
  styleUrls: ['./information-dialog.component.css']
})
export class InformationDialogComponent {
  about_us:boolean=false;
  contact_us:boolean=false;
  terms_conditions=false
  constructor(@Inject(MAT_DIALOG_DATA) private modalData:any,private dialogRef:MatDialogRef<InformationDialogComponent>) {
   if(modalData.data==="about-us") this.about_us=true
    else if(modalData.data==="contact-us") this.contact_us=true
    else if(modalData.data==="terms_conditions") this.terms_conditions=true
    else{
      alert(modalData.data)
    }
   }   
  }

