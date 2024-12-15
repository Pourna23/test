import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
productDetails:any

productCode:any
  constructor() {}

  getProductDetails(){
    return this.productDetails;
  }

  setProductDetails(data:any){
    this.productDetails=data
  }
  setProductCode(data:any){
    this.productCode=data

  }
  getProductCode(){
    return this.productCode
  }
}
