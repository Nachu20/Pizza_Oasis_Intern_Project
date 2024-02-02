import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { CartComponent } from './cart/cart.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:SigninComponent},
  {path:"signUp", component:RegisterComponent},
  {path:"home", component:AppComponent},
  { path:'cart',component:CartComponent},
  {path:'admin',component:PizzaListComponent},
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
