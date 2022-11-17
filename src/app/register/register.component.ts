import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CustService } from '../cust.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  regobject:any;
  regList:any;

  registerForm=new  FormGroup({
      custId:new FormControl({value:0,disabled:true}),
      name:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
      email:new FormControl("",[Validators.required,Validators.email]),
      mobile:new FormControl("",[Validators.required,Validators.pattern("[0-9]")]),
      address:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
  });
  SaveRegister(){
    console.log(this.registerForm.getRawValue());
    this.service.PostCustomerData(this.registerForm.getRawValue()).subscribe(result => {
      this.regList = result;
   });
  }
  constructor(private service:CustService) {
    // this.service.GetCustomerData().subscribe(result=>{
    //   this.regList=result;
    // });
   }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    console.warn(this.registerForm.value);
    //True if all the fields are filled
    if(this.submitted)
    {
      alert("Registered Successfully!!!");
    }
  }
  get name(): FormControl{
    return this.registerForm.get("name") as FormControl;
  }
  get email(): FormControl{
    return this.registerForm.get("email") as FormControl;
  }
  get mobile(): FormControl{
    return this.registerForm.get("mobile") as FormControl;
  }
  get address(): FormControl{
    return this.registerForm.get("address") as FormControl;
  }
  ngOnInit():void{}

}
