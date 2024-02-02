import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PaymentComponent } from './payment/payment.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { SliderComponent } from './slider/slider.component';
import { ToppingsComponent } from './toppings/toppings.component';


@NgModule({
  declarations: [
    SigninComponent,
    RegisterComponent,
    AppComponent,
    CartComponent,
    PizzaListComponent,
    PaymentComponent,
    SliderComponent,
    ToppingsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPayPalModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
