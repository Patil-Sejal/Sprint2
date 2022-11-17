import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustService } from '../cust.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  // CustomerList:any;
  // custobject:any;

//   customerForm=new  FormGroup({
//     custId:new FormControl(),
//     name: new FormControl(),
//     email: new FormControl(),
//     mobile: new FormControl(),
//     address: new FormControl()
// });

  // constructor(private service:CustService) {
  //   this.service.GetCustomerData().subscribe(result=>{
  //     this.CustomerList=result;
  //   });
  // }
  // SaveCourier(inputdata:any){
  //   this.service.PostCourierData(this.inputdata).subscribe(result=>{
  //     console.log(result);
  //   });
  //  }
  //  GetCustById(custId:any){
  //   this.service.GetCustomerById(custId).subscribe(result=>{
  //     this.custobject=result;
  //   });
  //  }
  //  DeleteCustById(custId:any){
  //   this.service.DeleteCustomerData(custId).subscribe(result=>{
  //     this.custobject=result;
  //  });
  //  }
  //  UpdateCustById(custId:any){
  //   console.log(this.customerForm.getRawValue());
  //   this.service.PutCustomerData(this.customerForm.getRawValue()).subscribe(result=>{
  //     this.custobject=result;
  //  });
  // }

  ngOnInit(): void {
  }

}
