import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Observable, Subject,tap,of, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustService {

  constructor(private http:HttpClient) { }
  //apiurl="https://localhost:44307/api/Customer";

  GetCustomerData(){
    return this.http.get<any>('https://localhost:44314/api/Customer/AllCustomers');
  }
  PostCustomerData(customerForm:any){
    return this.http.post('https://localhost:44314/api/Customer',customerForm);
  }
  PutCustomerData(customerForm:any){
    return this.http.put('https://localhost:44314/api/Customer',customerForm);
  }
  DeleteCustomerData(custId:any){
    return this.http.delete('https://localhost:44314/api/Customer'+"/"+custId);
  }
  GetCustomerById(custId:any){
    return this.http.get('https://localhost:44314/api/Customer'+"/"+custId);
  }

  GetCourierData(){
    return this.http.get('https://localhost:44314/api/Courier');
  }
  PostCourierData(customerForm:any){
    return this.http.post('https://localhost:44314/api/Courier',customerForm);
  }
  PutCourierData(customerForm:any){
    return this.http.put('https://localhost:44314/api/Courier',customerForm);
  }
  DeleteCourierData(courId:any){
    return this.http.delete('https://localhost:44314/api/Courier'+"/"+courId);
  }
  GetCourierById(courId:any){
    return this.http.get('https://localhost:44314/api/Courier'+"/"+courId);
  }
  getAllData(){
    let x=this.http.get('https://localhost:44314/api/Customer/AllCustomers')
    let y=this.http.get('https://localhost:44314/api/Courier/AllCourier')
    forkJoin([x,y]).subscribe(result=>{

      console.log(result)})
  }
}
