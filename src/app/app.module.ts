import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CourierComponent } from './courier/courier.component';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { DeliveryStatusComponent } from './delivery-status/delivery-status.component';
import { CustomersComponent } from './customers/customers.component';
import { RegisterComponent } from './register/register.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { PickUpComponent } from './pick-up/pick-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CourierComponent,
    DashboardComponent,
    FrontpageComponent,
    ContactUsComponent,
    AboutUsComponent,
    OurServicesComponent,
    DeliveryStatusComponent,
    CustomersComponent,
    RegisterComponent,
    ShipmentComponent,
    PickUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
