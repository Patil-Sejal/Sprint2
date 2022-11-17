import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourierComponent } from './courier/courier.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { DeliveryStatusComponent } from './delivery-status/delivery-status.component';
import { CustomersComponent } from './customers/customers.component';
import { RegisterComponent } from './register/register.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { PickUpComponent } from './pick-up/pick-up.component';

const routes: Routes = [
  { path : 'login', component : LoginComponent },
  { path : 'courier', component : CourierComponent},
  { path : 'dashboard', component : DashboardComponent},
  { path : 'frontpage', component:FrontpageComponent},
  { path : 'about-us', component:AboutUsComponent},
  { path : 'contact-us', component:ContactUsComponent},
  { path : 'our-services', component:OurServicesComponent},
  { path : 'delivery-status', component:DeliveryStatusComponent},
  { path : 'customers', component:CustomersComponent},
  { path : 'register', component:RegisterComponent},
  { path : 'shipment', component:ShipmentComponent},
  { path : 'pick-up', component:PickUpComponent},
  { path : '',redirectTo : 'frontpage', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
