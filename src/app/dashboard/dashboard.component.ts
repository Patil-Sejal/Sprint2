import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray,Validators } from '@angular/forms';
import { CustService } from '../cust.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  CustomerList:any;
  custobject:any;

  customerForm=new  FormGroup({
    custId:new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
    address: new FormControl(),
    courId:new FormControl({value:0,disabled:true}),
    cname:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    docket:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
    fromCity:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
    toCity:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
    currentCity:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
    weight:new FormControl("",[Validators.required]),
    status:new FormControl("",[Validators.required])
});


  constructor(private service:CustService,private http:HttpClient,private router:Router) {
  }
  // ************************Customer Service**************************************
  // SaveCustomer(){
  //   console.log(this.customerForm.getRawValue());
  //   this.service.PostCustomerData(this.customerForm.getRawValue()).subscribe(result => {
  //   this.custobject = result;
  //  });
  // }
  GetCustomer(){
  this.service.GetCustomerData().subscribe(result=>{
    this.CustomerList=result;
  });
}

  GetCustById(custId:any){
    this.service.GetCustomerById(custId).subscribe(result=>{
      this.custobject=result;
    });
   }
   DeleteCustById(custId:any){
    this.service.DeleteCustomerData(custId).subscribe(result=>{
      this.custobject=result;
   });
   }
   UpdateCustById(custId:any){
    console.log(this.customerForm.getRawValue());
    this.service.PutCustomerData(this.customerForm.getRawValue()).subscribe(result=>{
      this.custobject=result;
   });
  }
  // ***************************CourService***************************
  // SaveCourier(){
  //   console.log(this.customerForm.getRawValue());

  //   this.serv.PostCourierData(this.customerForm.getRawValue()).subscribe(result => {
  //     this.custobject = result;
  //  });
  // }
  GetCourierData(){
    this.service.GetCourierData().subscribe(result=>{
      this.CustomerList=result;
    })
  }

   GetCourById(courId:any){
    this.service.GetCourierById(courId).subscribe(result=>{
      this.custobject=result;
    });
   }
   DeleteCourById(courId:any){
    this.service.DeleteCourierData(courId).subscribe(result=>{
      this.custobject=result;
   });
   }
   UpdateCourById(courId:any){
    console.log(this.customerForm.getRawValue());
    this.service.PutCourierData(this.customerForm.getRawValue()).subscribe(result=>{
      this.custobject=result;
   });
   }
   get name(): FormControl{
    return this.customerForm.get("name") as FormControl;
  }
  get docket(): FormControl{
    return this.customerForm.get("docket") as FormControl;
  }
  get fromCity(): FormControl{
    return this.customerForm.get("fromCity") as FormControl;
  }
  get toCity(): FormControl{
    return this.customerForm.get("toCity") as FormControl;
  }
  get currentCity(): FormControl{
    return this.customerForm.get("currentCity") as FormControl;
  }
  get weight(): FormControl{
    return this.customerForm.get("weight") as FormControl;
  }
courformsubmitted(){
console.log(this.customerForm.valid);
}
  ngOnInit(): void {
     this.GetCourierData();
    // this.GetCustomer();
  }

}
