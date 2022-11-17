import { Component, OnInit } from '@angular/core';
import { DeliveryStatusService } from '../delivery-status.service';

@Component({
  selector: 'app-delivery-status',
  templateUrl: './delivery-status.component.html',
  styleUrls: ['./delivery-status.component.css']
})
export class DeliveryStatusComponent implements OnInit {

  public status: any;

  constructor(private service: DeliveryStatusService) {
    this.status = service.getOrderStatus();
     this.status = [
      // {
      //   status: "packed"
      // }
      // {
      //   status: "shipped"
      // }
      {
        status: "delivered"
      }
    ];
   }

  ngOnInit(): void {
  }

}
