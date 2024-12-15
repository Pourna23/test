import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-owner',
  templateUrl: './contact-owner.component.html',
  styleUrls: ['./contact-owner.component.css']
})
export class ContactOwnerComponent implements OnInit {
productDetails:any
buyerDetailsForm : FormGroup=new FormGroup({})
  constructor(private dataService:DataService,private fb:FormBuilder,private apiService:ApiService,public toast:ToastrService) { }

  ngOnInit(): void {
    this.productDetails=this.dataService.getProductDetails()
    console.log(this.productDetails,"Product")
    this.buyerDetailsForm=this.fb.group({
      name:[],
      address:[],
      mobNo:[],
      mailId:[]

    })
    
  }
  notify(){
    let req={

      "name":this.buyerDetailsForm.value.name,
      "address":this.buyerDetailsForm.value.address,
      "email":this.buyerDetailsForm.value.mailId,
      "phno":this.buyerDetailsForm.value.mobNo
    }
    this.apiService.smsService("sendSms",req).subscribe((response:any)=>{
      if(response.responseCode==="000"){
        this.toast.info("Notified Successfully! Owner will contact you soon.")
      }
    })
  }

}
