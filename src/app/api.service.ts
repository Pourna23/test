import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL:any="http://localhost:7201/billing/"
  constructor(private http:HttpClient) {}
   
   loginService(path:any,data:any){
    return this.http.post(this.apiURL+path,data);
   }
   smsService(path:any,data:any){
    return this.http.post(this.apiURL+path,data);
   }

   getAllProducts(path:any,data:any){
    return this.http.post(this.apiURL+path,data);
   }

   getsubProducts(path:any,data:any){
    return this.http.post(this.apiURL+path,data);
   }
}
