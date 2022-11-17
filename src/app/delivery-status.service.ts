import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeliveryStatusService {

  getOrderStatus() {
    return [
      {
        name: "Pinpont Pen",
        photo: "assets/img/products/pinpoint-ballpen.jpg",
        quantity: 2,
        date: "02-02-2020",
        price: 100,
        status: "packed"
      },
      {
        name: "Classmate Book",
        photo:
          "assets/img/products/classmate-classmate-notebook-cmn018-original-imae6ajy4qhfxd3k.jpeg",
        quantity: 2,
        date: "02-02-2020",
        price: 100,
        status: "shipped"
      }
    ];
  }
  constructor() { }
}
