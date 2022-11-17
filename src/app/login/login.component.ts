import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup = new  FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder,private service:AdminService,private router:Router){}

  get f() { return this.loginForm.controls; }
onSubmit() {

  this.submitted = true;
  // stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }
  console.warn(this.loginForm.value);
  //True if all the fields are filled
  if(this.submitted)
  {
    alert("Login Successfull!!");
  }
}
//Add user form actions
isAdminValid:boolean=false;
  LoginSubmit()
  {
  this.service.loginadmin([this.loginForm.value.userName,this.loginForm.value.password]).subscribe(result=>{
    if(result=="failure")
    {
      this.isAdminValid=false;
      alert("Login Unsuccessful");
    }
    else
    {
      this.isAdminValid=true;
      this.service.setToken(result);
      this.router.navigateByUrl('/dashboard')
    }});
  }
  get userName():FormControl
  {
    return this.loginForm.get('userName') as FormControl;
  }
  get password():FormControl
  {
    return this.loginForm.get('password') as FormControl;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      });
  }
}

