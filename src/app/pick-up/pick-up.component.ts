import { Component, OnInit } from '@angular/core';
import { CourService } from '../cour.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrls: ['./pick-up.component.css']
})
export class PickUpComponent implements OnInit {
  CourierList:any;
  courobject:any;

    constructor(private service:CourService) {
      this.service.GetCourierData().subscribe(result=>{
        this.CourierList=result;
      });
     }
     courform=new FormGroup({
      cId:new FormControl({value:0,disabled:true}),
      name:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
      docket:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
      fromCity:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
      toCity:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
      currentCity:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
      weight:new FormControl("",[Validators.required]),
      status:new FormControl("",[Validators.required])
    });
    courUform=new FormGroup({
      cId:new FormControl(),
      name:new FormControl(),
      docket:new FormControl(),
      fromCity:new FormControl(),
      toCity:new FormControl(),
      currentCity:new FormControl(),
      weight:new FormControl(),
      status:new FormControl()
    });
     SaveCourier(){
      console.log(this.courform.getRawValue());

      this.service.PostCourierData(this.courform.getRawValue()).subscribe(result => {
        this.courobject = result;
     });
    }

     GetCourById(cId:any){
      this.service.GetCourierById(cId).subscribe(result=>{
        this.courobject=result;
      });
     }
     DeleteCourById(cId:any){
      this.service.DeleteCourierData(cId).subscribe(result=>{
        this.courobject=result;
     });
     }
     UpdateCourById(cId:any){
      console.log(this.courUform.getRawValue());
      this.service.PutCourierData(this.courUform.getRawValue()).subscribe(result=>{
        this.courobject=result;
     });
     }
     get name(): FormControl{
      return this.courform.get("name") as FormControl;
    }
    get docket(): FormControl{
      return this.courform.get("docket") as FormControl;
    }
    get fromCity(): FormControl{
      return this.courform.get("fromCity") as FormControl;
    }
    get toCity(): FormControl{
      return this.courform.get("toCity") as FormControl;
    }
    get currentCity(): FormControl{
      return this.courform.get("currentCity") as FormControl;
    }
    get weight(): FormControl{
      return this.courform.get("weight") as FormControl;
    }
courformsubmitted(){
  console.log(this.courform.valid);
}

  ngOnInit(): void {
  }

}
