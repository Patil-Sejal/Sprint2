import { Component, OnInit } from '@angular/core';
import { CourService } from '../cour.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {

  courobject:any;
  CourierList:any;
  constructor(private service:CourService) {}
  courForm=new FormGroup({});
  GetCourById(cId:any)
  {
    this.service.GetCourierById(cId).subscribe(result=>{
    this.courobject=result;});
  }

  ngOnInit(): void {
  }

}
