import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { ContactOwnerComponent } from './contact-owner/contact-owner.component';
import { ProductComponent } from './product/product.component';
import { DetailedproductComponent } from './detailedproduct/detailedproduct.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../common/material/material.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ProductComponent,
    ContactOwnerComponent,
    DetailedproductComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule

  ]
})
export class MainModule { }
